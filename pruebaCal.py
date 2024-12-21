import requests

url = "https://api.cal.com/v1/bookings"

querystring = {"apiKey":"cal_live_6c9e9fc231e741a412be074dca3ba860"}

payload = {
    "eventTypeId": 1551521,
    "start": "2024-12-31T18:30:00-05:00",
    "responses": {
        "name": "Carlos Anibal",
        "email": "luismitotoy@gmail.com",
        "location": {
            "optionValue": "https://meet.google.com/trv-bfca-gxg",
            "value": ""
        },
        "smsReminderNumber": "3226724582"
    },
    "timeZone": "America/Bogota",
    "language": "es",
    "metadata": {}
}
headers = {"Content-Type": "application/json"}

response = requests.request("POST", url, json=payload, headers=headers, params=querystring)

print(response.text)