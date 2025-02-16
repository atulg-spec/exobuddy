import time
import os

import random

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(sender_email, sender_password, recipient_email, subject, message):
    # Set up the MIME
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject

    # Attach the message to the email
    msg.attach(MIMEText(message, 'plain'))

    # Connect to the SMTP server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    # Login to the sender's email account
    server.login(sender_email, sender_password)

    # Send the email
    server.sendmail(sender_email, recipient_email, msg.as_string())

    # Close the connection
    server.quit()

# Example usage
sender_email = 'seoworks065@gmail.com'
sender_password = 'wiiw nuat vakd vmal'
recipient_email = 'atulg0736@gmail.com'
subject = 'Exobuddy- Buddy 1'
message = 'All Fine ! Version : Advanced'




def generate_random_number():
    return random.randint(1, 20)


os.system('clear')
os.system('/etc/init.d/tor restart')
time.sleep(5)
a = generate_random_number()
time.sleep(a)
print(a)
os.system('node /root/exobuddy/startmarket.js')
send_email(sender_email, sender_password, recipient_email, subject, message)




