import smtplib
from email.message import EmailMessage


def alert_system(subject: str, body: str, receiver_email: str):
    alert_message = EmailMessage()
    alert_message.set_content(body)
    alert_message["Subject"] = subject
    alert_message["To"] = receiver_email

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login("300mail.test300@gmail.com", "rbyycunmwsjdmlkg")
        server.send_message(alert_message)

    print("Alert message was sent successfully!")


if __name__ == '__main__':
    alert_system("test", "hello there", "0yujan0@gmail.com")
