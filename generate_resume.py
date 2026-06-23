"""
Resume PDF Generator — Luai Alsakkaf
Generates a professional, ATS-friendly 1-page resume using ReportLab.
Usage: python generate_resume.py
Output: Luai_Alsakkaf_Resume.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# ─────────────────────────────────────────────────────────────
# CONFIG — Edit your details here
# ─────────────────────────────────────────────────────────────

RESUME_DATA = {
    "name": "LUAI ALSAKKAF",
    "title": "Junior Full-Stack .NET Developer",
    "contact": {
        "location": "Yanbu, Saudi Arabia",
        "phone": "+966 530 827 935",
        "email": "louialsakaf@gmail.com",  # ⚠️ Verify this is correct!
        "linkedin": "linkedin.com/in/luai-alsakkaf",
        "github": "github.com/YOUR-USERNAME",  # TODO: Replace with your actual GitHub
    },
    "summary": (
        "Junior .NET Developer with hands-on experience building web applications "
        "using ASP.NET Core, C#, Entity Framework Core, and SQL Server. Currently "
        "developing a full-stack course registration system at the Yanbu Chamber of "
        "Commerce. CS graduate (GPA: 3.95/4.00) with strong fundamentals in OOP, "
        "REST API design, and clean architecture."
    ),
    "skills": {
        "Languages": "C#, SQL, JavaScript, HTML/CSS",
        "Frameworks": "ASP.NET Core, Entity Framework Core, React",
        "Databases": "SQL Server, T-SQL, PostgreSQL",
        "Tools & Practices": (
            "Git, Visual Studio, Postman, Swagger, REST APIs, "
            "Dependency Injection, Repository Pattern, JWT Authentication"
        ),
    },
    "projects": [
        {
            "name": "Course Registration Portal",
            "tech": "ASP.NET Core, C#, SQL Server, React, EF Core",
            "bullets": [
                "Built a full-stack enrollment system using ASP.NET Core Web API with "
                "JWT authentication, serving the Yanbu Chamber of Commerce",
                "Implemented Repository Pattern and Dependency Injection for a clean, "
                "testable architecture with Entity Framework Core and SQL Server",
                "Developed a responsive React front-end with role-based access control "
                "and bilingual (Arabic/English) support",
            ],
        },
        {
            "name": "Learning Management System (LMS)",
            "tech": "Laravel, MySQL, TailwindCSS",
            "bullets": [
                "Built a multi-role educational platform with MVC architecture, "
                "secure API authentication (Sanctum), and relational database design",
                "Designed an accessible, responsive UI with full RTL support, dynamic "
                "contrast ratios, and a Dyslexia-friendly reading mode",
                "Integrated n8n workflow automation for email notifications and audit logging",
            ],
        },
        {
            "name": "Biometric Attendance System",
            "tech": "Python, OpenCV, SQLite",
            "bullets": [
                "Built a dual-factor authentication system combining facial recognition "
                "and voice verification (Picovoice SDK) achieving 98%+ accuracy",
                "Designed a secure SQLite database for user profiles, biometric data, "
                "and immutable time-stamped attendance logs",
            ],
        },
    ],
    "experience": [
        {
            "title": "Co-op Trainee — IT & Software Development",
            "company": "Yanbu Chamber of Commerce",
            "dates": "Jan 2026 – Present",
            "bullets": [
                "Developing the Course Registration Portal (see Projects) and supporting "
                "IT operations including system deployments and infrastructure audits",
            ],
        },
    ],
    "education": {
        "degree": "B.Sc. Computer Science",
        "school": "Yanbu Industrial College",
        "date": "Expected 2026",
        "gpa": "3.95 / 4.00",
        "honors": "First Class Honours — All Academic Years",
    },
    "certifications": [
        "Introduction to ASP.NET Core Framework — Microsoft (Coursera) | Mar 2026",
        "Data Management and Application Features — Microsoft (Coursera) | Apr 2026",
    ],
    "languages": "Arabic (Native)  |  English (Fluent)",
}


# ─────────────────────────────────────────────────────────────
# COLORS & LAYOUT
# ─────────────────────────────────────────────────────────────

COLORS = {
    "primary": HexColor("#1a1a2e"),      # Deep navy — name & headers
    "accent": HexColor("#0f7173"),        # Teal — section lines & links
    "text": HexColor("#2d2d2d"),          # Dark gray — body text
    "text_light": HexColor("#555555"),    # Medium gray — secondary info
    "link": HexColor("#0f7173"),          # Teal — hyperlinks
    "line": HexColor("#0f7173"),          # Section divider color
}

MARGIN_LEFT = 0.55 * inch
MARGIN_RIGHT = 0.55 * inch
MARGIN_TOP = 0.45 * inch
MARGIN_BOTTOM = 0.45 * inch

OUTPUT_FILE = "Luai_Alsakkaf_Resume.pdf"


# ─────────────────────────────────────────────────────────────
# STYLES
# ─────────────────────────────────────────────────────────────

def get_styles():
    """Define all paragraph styles used in the resume."""

    base_font = "Helvetica"
    bold_font = "Helvetica-Bold"

    return {
        "name": ParagraphStyle(
            "Name",
            fontName=bold_font,
            fontSize=18,
            leading=22,
            textColor=COLORS["primary"],
            alignment=TA_CENTER,
            spaceAfter=1,
        ),
        "title": ParagraphStyle(
            "Title",
            fontName=base_font,
            fontSize=10.5,
            leading=13,
            textColor=COLORS["accent"],
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "contact": ParagraphStyle(
            "Contact",
            fontName=base_font,
            fontSize=8.5,
            leading=11,
            textColor=COLORS["text_light"],
            alignment=TA_CENTER,
            spaceAfter=6,
        ),
        "section_heading": ParagraphStyle(
            "SectionHeading",
            fontName=bold_font,
            fontSize=10.5,
            leading=13,
            textColor=COLORS["primary"],
            spaceBefore=7,
            spaceAfter=3,
            textTransform="uppercase",
        ),
        "body": ParagraphStyle(
            "Body",
            fontName=base_font,
            fontSize=9.5,
            leading=12.5,
            textColor=COLORS["text"],
        ),
        "body_small": ParagraphStyle(
            "BodySmall",
            fontName=base_font,
            fontSize=9,
            leading=12,
            textColor=COLORS["text"],
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            fontName=base_font,
            fontSize=9,
            leading=12,
            textColor=COLORS["text"],
            leftIndent=12,
            bulletIndent=0,
            spaceBefore=1,
            spaceAfter=1,
        ),
        "project_title": ParagraphStyle(
            "ProjectTitle",
            fontName=bold_font,
            fontSize=9.5,
            leading=12,
            textColor=COLORS["primary"],
            spaceBefore=4,
            spaceAfter=1,
        ),
        "exp_title": ParagraphStyle(
            "ExpTitle",
            fontName=bold_font,
            fontSize=9.5,
            leading=12,
            textColor=COLORS["primary"],
            spaceBefore=2,
            spaceAfter=1,
        ),
        "exp_subtitle": ParagraphStyle(
            "ExpSubtitle",
            fontName=base_font,
            fontSize=9,
            leading=11,
            textColor=COLORS["text_light"],
            spaceAfter=2,
        ),
        "skills_label": ParagraphStyle(
            "SkillsLabel",
            fontName=bold_font,
            fontSize=9,
            leading=12,
            textColor=COLORS["primary"],
        ),
        "skills_value": ParagraphStyle(
            "SkillsValue",
            fontName=base_font,
            fontSize=9,
            leading=12,
            textColor=COLORS["text"],
        ),
        "footer": ParagraphStyle(
            "Footer",
            fontName=base_font,
            fontSize=8.5,
            leading=11,
            textColor=COLORS["text_light"],
            alignment=TA_CENTER,
        ),
    }


# ─────────────────────────────────────────────────────────────
# HELPER FUNCTIONS
# ─────────────────────────────────────────────────────────────

def section_divider():
    """Thin colored line to separate sections."""
    return HRFlowable(
        width="100%",
        thickness=0.8,
        color=COLORS["line"],
        spaceBefore=2,
        spaceAfter=4,
    )


def small_spacer(height=3):
    return Spacer(1, height)


def build_contact_line(data):
    """Build a single contact line with separators."""
    c = data["contact"]
    parts = [
        c["location"],
        c["phone"],
        f'<a href="mailto:{c["email"]}" color="#{COLORS["link"].hexval()[2:]}">{c["email"]}</a>',
    ]
    line1 = "  |  ".join(parts)

    link_parts = []
    if c.get("linkedin"):
        link_parts.append(
            f'<a href="https://{c["linkedin"]}" '
            f'color="#{COLORS["link"].hexval()[2:]}">{c["linkedin"]}</a>'
        )
    if c.get("github") and "YOUR-USERNAME" not in c["github"]:
        link_parts.append(
            f'<a href="https://{c["github"]}" '
            f'color="#{COLORS["link"].hexval()[2:]}">{c["github"]}</a>'
        )
    line2 = "  |  ".join(link_parts)

    return line1, line2


def build_skills_table(skills, styles):
    """Build a compact 2-column table for skills."""
    table_data = []
    for label, value in skills.items():
        label_p = Paragraph(f"{label}:", styles["skills_label"])
        value_p = Paragraph(value, styles["skills_value"])
        table_data.append([label_p, value_p])

    page_width = A4[0] - MARGIN_LEFT - MARGIN_RIGHT
    label_col_width = 1.2 * inch
    value_col_width = page_width - label_col_width

    table = Table(
        table_data,
        colWidths=[label_col_width, value_col_width],
        hAlign="LEFT",
    )
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ]))
    return table


# ─────────────────────────────────────────────────────────────
# BUILD THE RESUME
# ─────────────────────────────────────────────────────────────

def build_resume():
    """Construct all resume elements and generate PDF."""

    styles = get_styles()
    data = RESUME_DATA
    elements = []

    page_width = A4[0] - MARGIN_LEFT - MARGIN_RIGHT

    # ── HEADER ──────────────────────────────────────────────
    elements.append(Paragraph(data["name"], styles["name"]))
    elements.append(Paragraph(data["title"], styles["title"]))

    contact_line1, contact_line2 = build_contact_line(data)
    elements.append(Paragraph(contact_line1, styles["contact"]))
    if contact_line2:
        elements.append(Spacer(1, -2))
        elements.append(Paragraph(contact_line2, styles["contact"]))

    # ── SUMMARY ─────────────────────────────────────────────
    elements.append(section_divider())
    elements.append(Paragraph(
        '<font name="Helvetica-Bold" size="10.5" color="#{}">{}</font>'.format(
            COLORS["primary"].hexval()[2:], "PROFESSIONAL SUMMARY"
        ),
        styles["section_heading"]
    ))
    elements.append(small_spacer(2))
    elements.append(Paragraph(data["summary"], styles["body_small"]))

    # ── TECHNICAL SKILLS ────────────────────────────────────
    elements.append(small_spacer(4))
    elements.append(section_divider())
    elements.append(Paragraph(
        '<font name="Helvetica-Bold" size="10.5" color="#{}">{}</font>'.format(
            COLORS["primary"].hexval()[2:], "TECHNICAL SKILLS"
        ),
        styles["section_heading"]
    ))
    elements.append(small_spacer(1))
    elements.append(build_skills_table(data["skills"], styles))

    # ── PROJECTS ────────────────────────────────────────────
    elements.append(small_spacer(4))
    elements.append(section_divider())
    elements.append(Paragraph(
        '<font name="Helvetica-Bold" size="10.5" color="#{}">{}</font>'.format(
            COLORS["primary"].hexval()[2:], "PROJECTS"
        ),
        styles["section_heading"]
    ))

    for project in data["projects"]:
        # Project title + tech stack on same conceptual line
        tech_color = COLORS["text_light"].hexval()[2:]
        title_text = (
            f'{project["name"]}  '
            f'<font color="#{tech_color}" size="8.5">|  {project["tech"]}</font>'
        )
        elements.append(Paragraph(title_text, styles["project_title"]))

        for bullet in project["bullets"]:
            elements.append(Paragraph(
                f'<bullet>&bull;</bullet> {bullet}',
                styles["bullet"],
            ))

    # ── EXPERIENCE ──────────────────────────────────────────
    elements.append(small_spacer(4))
    elements.append(section_divider())
    elements.append(Paragraph(
        '<font name="Helvetica-Bold" size="10.5" color="#{}">{}</font>'.format(
            COLORS["primary"].hexval()[2:], "EXPERIENCE"
        ),
        styles["section_heading"]
    ))

    for exp in data["experience"]:
        # Title and dates on same line using a table
        title_p = Paragraph(exp["title"], styles["exp_title"])
        dates_style = ParagraphStyle(
            "Dates",
            parent=styles["exp_subtitle"],
            alignment=TA_RIGHT,
        )
        dates_p = Paragraph(exp["dates"], dates_style)

        header_table = Table(
            [[title_p, dates_p]],
            colWidths=[page_width * 0.7, page_width * 0.3],
            hAlign="LEFT",
        )
        header_table.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]))
        elements.append(header_table)
        elements.append(Paragraph(exp["company"], styles["exp_subtitle"]))

        for bullet in exp["bullets"]:
            elements.append(Paragraph(
                f'<bullet>&bull;</bullet> {bullet}',
                styles["bullet"],
            ))

    # ── EDUCATION ───────────────────────────────────────────
    elements.append(small_spacer(4))
    elements.append(section_divider())
    elements.append(Paragraph(
        '<font name="Helvetica-Bold" size="10.5" color="#{}">{}</font>'.format(
            COLORS["primary"].hexval()[2:], "EDUCATION"
        ),
        styles["section_heading"]
    ))

    edu = data["education"]
    edu_left = Paragraph(
        f'<font name="Helvetica-Bold">{edu["degree"]}</font>  —  {edu["school"]}',
        styles["body_small"],
    )
    edu_right = Paragraph(
        f'{edu["date"]}  |  GPA: {edu["gpa"]}',
        ParagraphStyle("EduRight", parent=styles["body_small"], alignment=TA_RIGHT),
    )
    edu_table = Table(
        [[edu_left, edu_right]],
        colWidths=[page_width * 0.6, page_width * 0.4],
        hAlign="LEFT",
    )
    edu_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    elements.append(edu_table)
    elements.append(Paragraph(
        f'<font color="#{COLORS["text_light"].hexval()[2:]}">{edu["honors"]}</font>',
        styles["body_small"],
    ))

    # ── CERTIFICATIONS ──────────────────────────────────────
    elements.append(small_spacer(4))
    elements.append(section_divider())
    elements.append(Paragraph(
        '<font name="Helvetica-Bold" size="10.5" color="#{}">{}</font>'.format(
            COLORS["primary"].hexval()[2:], "CERTIFICATIONS"
        ),
        styles["section_heading"]
    ))

    for cert in data["certifications"]:
        elements.append(Paragraph(
            f'<bullet>&bull;</bullet> {cert}',
            styles["bullet"],
        ))

    # ── LANGUAGES ───────────────────────────────────────────
    elements.append(small_spacer(5))
    elements.append(Paragraph(data["languages"], styles["footer"]))

    # ── BUILD PDF ───────────────────────────────────────────
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        leftMargin=MARGIN_LEFT,
        rightMargin=MARGIN_RIGHT,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title=f'{data["name"]} — Resume',
        author=data["name"],
        subject="Resume",
        keywords="ASP.NET Core, C#, SQL Server, Junior Developer",
    )

    doc.build(elements)

    file_path = os.path.abspath(OUTPUT_FILE)
    print(f"[OK] Resume generated successfully!")
    print(f"File: {file_path}")
    print(f"Format: A4, 1 page")
    print(f"Margins: {MARGIN_LEFT/inch:.2f}\" L/R, {MARGIN_TOP/inch:.2f}\" T/B")


if __name__ == "__main__":
    build_resume()
