import smtplib as m
import config
import sys

mail = sys.argv[1]
def send_email(mail):
    try:

        server = m.SMTP('smtp.gmail.com',587)
        server.ehlo()
        server.starttls()
        server.login(config.EMAIL, config.PASS)
        print("sending...")
        message = "smtp {}".format(mail)
        server.sendmail(config.EMAIL,mail,message)
        print("sending...")
        server.quit()
        print("sended")
    except:
        print("Email failed")

send_email(mail)    
