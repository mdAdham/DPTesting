class Stethescope:
    def check_hearbeat(selfcalled):
        print("checking heart beat")
        
class Doctor:
    def __init__(selfcalled):
        selfcalled.stethescope = Stethescope()
        
    def examine_patient(selfcalled):
        print("doctor is examine the patient")
        selfcalled.stethescope.check_hearbeat()
        
d = Doctor()
d.examine_patient()