import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

# laod email and password from .env
load_dotenv()
Email_Address = os.getenv("email_address")
Email_password = os.getenv("email_password")


def alert_system(subject: str, body: str, receiver_email: str):
    alert_message = EmailMessage()
    alert_message.set_content(body)
    alert_message["Subject"] = subject
    alert_message["To"] = receiver_email

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(Email_Address, Email_password)
        server.send_message(alert_message)

    print("Alert message was sent successfully!")
