import { IRow } from "../components/row/row.component";
export const rows: IRow[] = [
    {
        title: 'קומדיות טלוויזיה',
        cubes: [
            {
                imgSrc: 'assets/thumbnails/suits.webp',
                tags: ["שנון", "דרמה קומית", "פסקול ידוע"],
                title: "Suits",
                description: "בחור צעיר וחריף מצליח להרשים עורך דין בכיר, שמקבל אותו לתפקיד נחשק במשרד עורכי הדין שלו – על אף שנשר מהלימודים ואין לו תואר במשפטים.",
                metaData: {
                    participants: "גבריאל מאכט, פטריק ג'יי אדמס, ריק הופמן, עוד",
                    genres: "תוכניות טלוויזיה - בית משפט, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "שנון"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט חלק 1 ו-2',
                        description: 'הרווי מקבל קידום בעבודה ונדרש לגייס למשרד עובד בעל תואר מבית הספר למשפטים של אוניברסיטת הרווארד. הוא בוחר במייק רוס, אך למייק אין תואר במשפטים.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbchAc586ZNPdqoMTfh3bhf62258NTkUzojfRnK0G49LJLUapqVWnFDZsrPFxT2BeC4f1q759KTrwHKghQ7Zw0SfCnGzJhc-94pfwhAPZwFxztzn.webp?r=1b9",
                        length: 81
                    },
                    {
                        id: 2,
                        title: 'שגיאות ומחדלים',
                        description: 'מקרה פשוט מסתבך כאשר הרווי מואשם בקשר רומנטי בלתי הולם עם אישה נשואה.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABULbumMFepaNF75HK7Ry_HdOzhck9E6UG8YbhUIjgdX1pHxBHZwkuscj7sB1ar29g9V_j-pwBk3SwXVPINMJhQ1lStoVtFwTMxYLgbsYiE7w4h2r.webp?r=72a",
                        length: 43
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/friends.webp',
                tags: ["שנון", "אקסצנטרי", "סיטקום"],
                title: "חברים",
                description: "סיטקום מצליח שעוקב אחר הרפתקאותיהם הכושלות אך המשעשעות של שישה חברים בגילאי העשרים פלוס  שמתמודדים עם מהמורות בקריירה, בחיים ובאהבה במנהטן של שנות ה-90.",
                metaData: {
                    participants: "ג'ניפר אניסטון, קורטני קוקס, ליסה קודרו, עוד",
                    genres: "קומדיות סיטקום, קומדיות טלוויזיה, תוכניות טלוויזיה אמריקאיות",
                    tags: "שנון, אקסצנטרי"
                },
                items: [
                    {
                        id: 1,
                        title: 'הפרק שבו מוניקה מקבלת שותפה לדירה (פיילוט)',
                        description: "רייצ'ל בורחת מהחתונה שלה ופוגשת את החברים בבית הקפה. רוס מדוכא מהגירושים שלו, אבל עדיין מאוהב ברייצ'ל.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYNxZy-KPW08N_V_2cnzjfvZS5IoQwEq8UlA1afJW0kqOp4J6I6L0uEQtPQlW147Vi9vE3u5jBGuU_CxWcXKrdFZGf-3AYUMuiiBOHVFMIQ0MuFi.webp?r=42d",
                        length: 22
                    },
                    {
                        id: 2,
                        title: 'הפרק עם האולטרה-סאונד',
                        description: 'גרושתו הלסבית של רוס בהיריון ממנו, והוא לא מרוצה משם המשפחה שהיא בוחרת לתינוק.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa7FdcZmBtTko6yr2XCoDwojZjBLchwLh81m8w-L8eLxBKSDMV9Ln7kEC6OC9hNuVHn2A2DyfwvhhsYo7mnmY5pmxKlUWWil3gaPpbp-qiNX-Q21.webp?r=32a",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/orange-is-the-new-black.jpg',
                tags: ["שנון", "בועט", "קומדיה שחורה"],
                title: "כתום הוא השחור החדש",
                description: "ניו יורקרית ממעמד גבוה מתמודדת עם תוצאות מעשיה ומגיעה לכלא נשים. עד מהרה יש לה חברות ואויבות חדשות.",
                metaData: {
                    participants: "טיילור שילינג, קייט מאלגרו, לורה פריפון, עוד",
                    genres: "סדרות המבוססות על ספרים, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'לא הייתי מוכנה',
                        description: "אחרי שנידונה ל-15 חודשי מאסר על פשע שביצעה בנעוריה, פייפר צ'פמן עוזבת את ארוסה התומך לארי ועוברת לביתה החדש: בית סוהר לנשים.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABblWFnLulwQUVQk7_cHPRqENbWfa7qN66sVooMCT9BtqkrAr9xkUSZNfDWxcHdcMkTkFkXdUEIPY-bQJQvptCaLCOYNyyp_s7O39vCdrLqr7aI3r.jpg?r=752",
                        length: 52
                    },
                    {
                        id: 2,
                        title: 'אגרוף בציצי',
                        description: 'מנהלת המטבח מרעיבה את פייפר אחרי שהעליבה את האוכל שלה, ופייפר מתקשה להביע התנצלות משביעת רצון.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckPBPHb0ElGJY8YLGbyeAO7_x9U1r-Q-8iVPnZRxdRXBIRA-JU3iGcUTzn8aipVVNPK1yL4EjudmDkP9CORgySj3ksOhLNAYU_bobAju__F8l4n.jpg?r=3a0",
                        length: 53
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/cobra-kai.jpg',
                tags: ["סוחף", "נוגע ללב", "מלהיב"],
                title: "קוברה קאי",
                description: "סדרת המשך לסרטי \"קראטה קיד\" שבה מתחדשת היריבות בין ג'וני לדניאל, עשרות שנים אחרי הקרב ששינה את חייהם.",
                metaData: {
                    participants: "ראלף מאצ'יו, ויליאם זבקה, שולו מרידוונייה, עוד",
                    genres: "דרמות טלוויזיה, קומדיות טלוויזיה, תוכניות פעולה והרפתקאות",
                    tags: "נוגע ללב, מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'נשראת צעיר',
                        description: "ג'וני הוא שתיין כבד שחי כבר עשרות שנים בצל ההפסד ליריבו דניאל. כשהוא מגיע לתחתית, הוא מחליט לפתוח דוג'ו קראטה חדש – קוברה קאי.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUENODFpasEIK1Qe52lny4oqVBeGnibGI5ceAbuQRNRQgXsR48iOuYgDuTD-_wQ70qR6rHfhlwLeO_yCkRN3omlT8TdMHHci01xflCZdMmehC-rR.jpg?r=983",
                        length: 29
                    },
                    {
                        id: 2,
                        title: 'הכה ראשון',
                        description: "דניאל מגלה את הדוג'ו החדש של קוברה קאי והדבר מטריד אותו. בהמשך הוא שומע מקיילר, הבחור שסאם יוצאת איתו, על קטטה אלימה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ9QWhExyV_0gL-S_tpCugAIP9Ww0pYQOn9NQOBsQyJCHh4FMvfdEZHbgzgCxkBNoFNhHf7AYe7SEFpNE5HswFu93FjCsTITEMOz51X6R766LwXu.jpg?r=fb0",
                        length: 28
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-ranch.jpg',
                tags: ["בועט", "אמוציונלי", "סיטקום"],
                title: "החווה",
                description: "הניסיון של קולט להפוך לספורטאי מקצועי לא הצליח. עכשיו הוא עוזר לאביו ולאחיו להחזיק את החווה מעל המים ומנסה להבין איך הוא משתלב במשפחה.",
                metaData: {
                    participants: "אשטון קוצ'ר, סם אליוט, דברה וינגר, עוד",
                    genres: "קומדיות סיטקום, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "בועט, אמוציונלי"
                },
                items: [
                    {
                        id: 1,
                        title: 'Back Where I Come From',
                        description: "כשקולט בנט שב הביתה מקנדה למבחנים בקבוצה המקצוענית למחצה של דנבר, הוא מבין שהחווה של משפחתו נקלעה לקשיים.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVsOiGXUCycKLb_mZUWN59_DpLTFqcgsg3cHuNofOiLcpu5eDQDruXUyOoPej7FaRBqItdJy38yXgfLd8x-6gHMBGxfNjivbsF4v-zNRAPYEhY8k.jpg?r=485",
                        length: 29
                    },
                    {
                        id: 2,
                        title: 'Some People Change',
                        description: "קולט פוגש חברה לשעבר בבר של מגי וחולק בקבוק וויסקי וזכרונות מהעבר עם רוסטר. זכיה בחיבתו המחודשת של בו מתגלה כמשימה אבודה.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSXdKVdBeI4ytV0XkPwB7qT2MZDdeRH-4ffMCslQOWLRBC03KILRPl5MEee80uNqR9DLJ0psjgBagD-Swpx-VQiUWGLKr7PpCMnjr-WmJ-JDrinV.jpg?r=e91",
                        length: 32
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-good-place.webp',
                tags: ["שנון", "אקסצנטרי", "סיטקום"],
                title: "המקום הטוב",
                description: "בעקבות טעות, אלינור שלסטרופ האגוצנטרית מגיעה לאחר מותה דווקא אל 'המקום הטוב', שאליו מגיעים רק אנשים טובים. כדי שתוכל להישאר, עליה להפוך לאדם טוב יותר.",
                metaData: {
                    participants: "קריסטן בל, טד דנסון, ויליאם ג'קסון הארפר, עוד",
                    genres: "קומדיות סיטקום, תוכניות טלוויזיה אמריקאיות, קומדיות טלוויזיה",
                    tags: "שנון, אקסצנטרי"
                },
                items: [
                    {
                        id: 1,
                        title: 'הכול בסדר',
                        description: "אלינור מתה ומגיעה לגן עדן, ומבינה מהר מאוד שהגיעה לשם בטעות.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABep-1T1OOjO8ejWWCLphLicDHdFavv0oZCRRjegDkCfyGg2KHEj9eGJx0Uj2Go6TcKjdzjGW8fioG3mJ51sTEZTTGBb3A9-ujI019sgLC5dn9ix1.webp?r=296",
                        length: 32
                    },
                    {
                        id: 2,
                        title: 'לעוף',
                        description: "אלינור רוצה שצ'ידי ילמד אותה להיות אדם טוב, והוא מתעקש שהיא תיקח חלק בניקוי השכונה במקום ללמוד לעוף.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSX4DbojPdfzI4HE-p6TEaiNGzdJrvxF4nuyyKgj2oP7ikDc3QMb-qj_v99C-EryzGNN5a_XHq39AeP0RJIZMhhrtNL3mC0ea-df-pL34GGj2qYe.webp?r=1e6",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/suits.webp',
                tags: ["שנון", "דרמה קומית", "פסקול ידוע"],
                title: "Suits",
                description: "בחור צעיר וחריף מצליח להרשים עורך דין בכיר, שמקבל אותו לתפקיד נחשק במשרד עורכי הדין שלו – על אף שנשר מהלימודים ואין לו תואר במשפטים.",
                metaData: {
                    participants: "גבריאל מאכט, פטריק ג'יי אדמס, ריק הופמן, עוד",
                    genres: "תוכניות טלוויזיה - בית משפט, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "שנון"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט חלק 1 ו-2',
                        description: 'הרווי מקבל קידום בעבודה ונדרש לגייס למשרד עובד בעל תואר מבית הספר למשפטים של אוניברסיטת הרווארד. הוא בוחר במייק רוס, אך למייק אין תואר במשפטים.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbchAc586ZNPdqoMTfh3bhf62258NTkUzojfRnK0G49LJLUapqVWnFDZsrPFxT2BeC4f1q759KTrwHKghQ7Zw0SfCnGzJhc-94pfwhAPZwFxztzn.webp?r=1b9",
                        length: 81
                    },
                    {
                        id: 2,
                        title: 'שגיאות ומחדלים',
                        description: 'מקרה פשוט מסתבך כאשר הרווי מואשם בקשר רומנטי בלתי הולם עם אישה נשואה.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABULbumMFepaNF75HK7Ry_HdOzhck9E6UG8YbhUIjgdX1pHxBHZwkuscj7sB1ar29g9V_j-pwBk3SwXVPINMJhQ1lStoVtFwTMxYLgbsYiE7w4h2r.webp?r=72a",
                        length: 43
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/friends.webp',
                tags: ["שנון", "אקסצנטרי", "סיטקום"],
                title: "חברים",
                description: "סיטקום מצליח שעוקב אחר הרפתקאותיהם הכושלות אך המשעשעות של שישה חברים בגילאי העשרים פלוס  שמתמודדים עם מהמורות בקריירה, בחיים ובאהבה במנהטן של שנות ה-90.",
                metaData: {
                    participants: "ג'ניפר אניסטון, קורטני קוקס, ליסה קודרו, עוד",
                    genres: "קומדיות סיטקום, קומדיות טלוויזיה, תוכניות טלוויזיה אמריקאיות",
                    tags: "שנון, אקסצנטרי"
                },
                items: [
                    {
                        id: 1,
                        title: 'הפרק שבו מוניקה מקבלת שותפה לדירה (פיילוט)',
                        description: "רייצ'ל בורחת מהחתונה שלה ופוגשת את החברים בבית הקפה. רוס מדוכא מהגירושים שלו, אבל עדיין מאוהב ברייצ'ל.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYNxZy-KPW08N_V_2cnzjfvZS5IoQwEq8UlA1afJW0kqOp4J6I6L0uEQtPQlW147Vi9vE3u5jBGuU_CxWcXKrdFZGf-3AYUMuiiBOHVFMIQ0MuFi.webp?r=42d",
                        length: 22
                    },
                    {
                        id: 2,
                        title: 'הפרק עם האולטרה-סאונד',
                        description: 'גרושתו הלסבית של רוס בהיריון ממנו, והוא לא מרוצה משם המשפחה שהיא בוחרת לתינוק.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa7FdcZmBtTko6yr2XCoDwojZjBLchwLh81m8w-L8eLxBKSDMV9Ln7kEC6OC9hNuVHn2A2DyfwvhhsYo7mnmY5pmxKlUWWil3gaPpbp-qiNX-Q21.webp?r=32a",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/orange-is-the-new-black.jpg',
                tags: ["שנון", "בועט", "קומדיה שחורה"],
                title: "כתום הוא השחור החדש",
                description: "ניו יורקרית ממעמד גבוה מתמודדת עם תוצאות מעשיה ומגיעה לכלא נשים. עד מהרה יש לה חברות ואויבות חדשות.",
                metaData: {
                    participants: "טיילור שילינג, קייט מאלגרו, לורה פריפון, עוד",
                    genres: "סדרות המבוססות על ספרים, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'לא הייתי מוכנה',
                        description: "אחרי שנידונה ל-15 חודשי מאסר על פשע שביצעה בנעוריה, פייפר צ'פמן עוזבת את ארוסה התומך לארי ועוברת לביתה החדש: בית סוהר לנשים.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABblWFnLulwQUVQk7_cHPRqENbWfa7qN66sVooMCT9BtqkrAr9xkUSZNfDWxcHdcMkTkFkXdUEIPY-bQJQvptCaLCOYNyyp_s7O39vCdrLqr7aI3r.jpg?r=752",
                        length: 52
                    },
                    {
                        id: 2,
                        title: 'אגרוף בציצי',
                        description: 'מנהלת המטבח מרעיבה את פייפר אחרי שהעליבה את האוכל שלה, ופייפר מתקשה להביע התנצלות משביעת רצון.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckPBPHb0ElGJY8YLGbyeAO7_x9U1r-Q-8iVPnZRxdRXBIRA-JU3iGcUTzn8aipVVNPK1yL4EjudmDkP9CORgySj3ksOhLNAYU_bobAju__F8l4n.jpg?r=3a0",
                        length: 53
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/cobra-kai.jpg',
                tags: ["סוחף", "נוגע ללב", "מלהיב"],
                title: "קוברה קאי",
                description: "סדרת המשך לסרטי \"קראטה קיד\" שבה מתחדשת היריבות בין ג'וני לדניאל, עשרות שנים אחרי הקרב ששינה את חייהם.",
                metaData: {
                    participants: "ראלף מאצ'יו, ויליאם זבקה, שולו מרידוונייה, עוד",
                    genres: "דרמות טלוויזיה, קומדיות טלוויזיה, תוכניות פעולה והרפתקאות",
                    tags: "נוגע ללב, מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'נשראת צעיר',
                        description: "ג'וני הוא שתיין כבד שחי כבר עשרות שנים בצל ההפסד ליריבו דניאל. כשהוא מגיע לתחתית, הוא מחליט לפתוח דוג'ו קראטה חדש – קוברה קאי.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUENODFpasEIK1Qe52lny4oqVBeGnibGI5ceAbuQRNRQgXsR48iOuYgDuTD-_wQ70qR6rHfhlwLeO_yCkRN3omlT8TdMHHci01xflCZdMmehC-rR.jpg?r=983",
                        length: 29
                    },
                    {
                        id: 2,
                        title: 'הכה ראשון',
                        description: "דניאל מגלה את הדוג'ו החדש של קוברה קאי והדבר מטריד אותו. בהמשך הוא שומע מקיילר, הבחור שסאם יוצאת איתו, על קטטה אלימה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ9QWhExyV_0gL-S_tpCugAIP9Ww0pYQOn9NQOBsQyJCHh4FMvfdEZHbgzgCxkBNoFNhHf7AYe7SEFpNE5HswFu93FjCsTITEMOz51X6R766LwXu.jpg?r=fb0",
                        length: 28
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-ranch.jpg',
                tags: ["בועט", "אמוציונלי", "סיטקום"],
                title: "החווה",
                description: "הניסיון של קולט להפוך לספורטאי מקצועי לא הצליח. עכשיו הוא עוזר לאביו ולאחיו להחזיק את החווה מעל המים ומנסה להבין איך הוא משתלב במשפחה.",
                metaData: {
                    participants: "אשטון קוצ'ר, סם אליוט, דברה וינגר, עוד",
                    genres: "קומדיות סיטקום, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "בועט, אמוציונלי"
                },
                items: [
                    {
                        id: 1,
                        title: 'Back Where I Come From',
                        description: "כשקולט בנט שב הביתה מקנדה למבחנים בקבוצה המקצוענית למחצה של דנבר, הוא מבין שהחווה של משפחתו נקלעה לקשיים.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVsOiGXUCycKLb_mZUWN59_DpLTFqcgsg3cHuNofOiLcpu5eDQDruXUyOoPej7FaRBqItdJy38yXgfLd8x-6gHMBGxfNjivbsF4v-zNRAPYEhY8k.jpg?r=485",
                        length: 29
                    },
                    {
                        id: 2,
                        title: 'Some People Change',
                        description: "קולט פוגש חברה לשעבר בבר של מגי וחולק בקבוק וויסקי וזכרונות מהעבר עם רוסטר. זכיה בחיבתו המחודשת של בו מתגלה כמשימה אבודה.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSXdKVdBeI4ytV0XkPwB7qT2MZDdeRH-4ffMCslQOWLRBC03KILRPl5MEee80uNqR9DLJ0psjgBagD-Swpx-VQiUWGLKr7PpCMnjr-WmJ-JDrinV.jpg?r=e91",
                        length: 32
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-good-place.webp',
                tags: ["שנון", "אקסצנטרי", "סיטקום"],
                title: "המקום הטוב",
                description: "בעקבות טעות, אלינור שלסטרופ האגוצנטרית מגיעה לאחר מותה דווקא אל 'המקום הטוב', שאליו מגיעים רק אנשים טובים. כדי שתוכל להישאר, עליה להפוך לאדם טוב יותר.",
                metaData: {
                    participants: "קריסטן בל, טד דנסון, ויליאם ג'קסון הארפר, עוד",
                    genres: "קומדיות סיטקום, תוכניות טלוויזיה אמריקאיות, קומדיות טלוויזיה",
                    tags: "שנון, אקסצנטרי"
                },
                items: [
                    {
                        id: 1,
                        title: 'הכול בסדר',
                        description: "אלינור מתה ומגיעה לגן עדן, ומבינה מהר מאוד שהגיעה לשם בטעות.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABep-1T1OOjO8ejWWCLphLicDHdFavv0oZCRRjegDkCfyGg2KHEj9eGJx0Uj2Go6TcKjdzjGW8fioG3mJ51sTEZTTGBb3A9-ujI019sgLC5dn9ix1.webp?r=296",
                        length: 32
                    },
                    {
                        id: 2,
                        title: 'לעוף',
                        description: "אלינור רוצה שצ'ידי ילמד אותה להיות אדם טוב, והוא מתעקש שהיא תיקח חלק בניקוי השכונה במקום ללמוד לעוף.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSX4DbojPdfzI4HE-p6TEaiNGzdJrvxF4nuyyKgj2oP7ikDc3QMb-qj_v99C-EryzGNN5a_XHq39AeP0RJIZMhhrtNL3mC0ea-df-pL34GGj2qYe.webp?r=1e6",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/suits.webp',
                tags: ["שנון", "דרמה קומית", "פסקול ידוע"],
                title: "Suits",
                description: "בחור צעיר וחריף מצליח להרשים עורך דין בכיר, שמקבל אותו לתפקיד נחשק במשרד עורכי הדין שלו – על אף שנשר מהלימודים ואין לו תואר במשפטים.",
                metaData: {
                    participants: "גבריאל מאכט, פטריק ג'יי אדמס, ריק הופמן, עוד",
                    genres: "תוכניות טלוויזיה - בית משפט, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "שנון"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט חלק 1 ו-2',
                        description: 'הרווי מקבל קידום בעבודה ונדרש לגייס למשרד עובד בעל תואר מבית הספר למשפטים של אוניברסיטת הרווארד. הוא בוחר במייק רוס, אך למייק אין תואר במשפטים.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbchAc586ZNPdqoMTfh3bhf62258NTkUzojfRnK0G49LJLUapqVWnFDZsrPFxT2BeC4f1q759KTrwHKghQ7Zw0SfCnGzJhc-94pfwhAPZwFxztzn.webp?r=1b9",
                        length: 81
                    },
                    {
                        id: 2,
                        title: 'שגיאות ומחדלים',
                        description: 'מקרה פשוט מסתבך כאשר הרווי מואשם בקשר רומנטי בלתי הולם עם אישה נשואה.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABULbumMFepaNF75HK7Ry_HdOzhck9E6UG8YbhUIjgdX1pHxBHZwkuscj7sB1ar29g9V_j-pwBk3SwXVPINMJhQ1lStoVtFwTMxYLgbsYiE7w4h2r.webp?r=72a",
                        length: 43
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/friends.webp',
                tags: ["שנון", "אקסצנטרי", "סיטקום"],
                title: "חברים",
                description: "סיטקום מצליח שעוקב אחר הרפתקאותיהם הכושלות אך המשעשעות של שישה חברים בגילאי העשרים פלוס  שמתמודדים עם מהמורות בקריירה, בחיים ובאהבה במנהטן של שנות ה-90.",
                metaData: {
                    participants: "ג'ניפר אניסטון, קורטני קוקס, ליסה קודרו, עוד",
                    genres: "קומדיות סיטקום, קומדיות טלוויזיה, תוכניות טלוויזיה אמריקאיות",
                    tags: "שנון, אקסצנטרי"
                },
                items: [
                    {
                        id: 1,
                        title: 'הפרק שבו מוניקה מקבלת שותפה לדירה (פיילוט)',
                        description: "רייצ'ל בורחת מהחתונה שלה ופוגשת את החברים בבית הקפה. רוס מדוכא מהגירושים שלו, אבל עדיין מאוהב ברייצ'ל.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYNxZy-KPW08N_V_2cnzjfvZS5IoQwEq8UlA1afJW0kqOp4J6I6L0uEQtPQlW147Vi9vE3u5jBGuU_CxWcXKrdFZGf-3AYUMuiiBOHVFMIQ0MuFi.webp?r=42d",
                        length: 22
                    },
                    {
                        id: 2,
                        title: 'הפרק עם האולטרה-סאונד',
                        description: 'גרושתו הלסבית של רוס בהיריון ממנו, והוא לא מרוצה משם המשפחה שהיא בוחרת לתינוק.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa7FdcZmBtTko6yr2XCoDwojZjBLchwLh81m8w-L8eLxBKSDMV9Ln7kEC6OC9hNuVHn2A2DyfwvhhsYo7mnmY5pmxKlUWWil3gaPpbp-qiNX-Q21.webp?r=32a",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/orange-is-the-new-black.jpg',
                tags: ["שנון", "בועט", "קומדיה שחורה"],
                title: "כתום הוא השחור החדש",
                description: "ניו יורקרית ממעמד גבוה מתמודדת עם תוצאות מעשיה ומגיעה לכלא נשים. עד מהרה יש לה חברות ואויבות חדשות.",
                metaData: {
                    participants: "טיילור שילינג, קייט מאלגרו, לורה פריפון, עוד",
                    genres: "סדרות המבוססות על ספרים, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'לא הייתי מוכנה',
                        description: "אחרי שנידונה ל-15 חודשי מאסר על פשע שביצעה בנעוריה, פייפר צ'פמן עוזבת את ארוסה התומך לארי ועוברת לביתה החדש: בית סוהר לנשים.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABblWFnLulwQUVQk7_cHPRqENbWfa7qN66sVooMCT9BtqkrAr9xkUSZNfDWxcHdcMkTkFkXdUEIPY-bQJQvptCaLCOYNyyp_s7O39vCdrLqr7aI3r.jpg?r=752",
                        length: 52
                    },
                    {
                        id: 2,
                        title: 'אגרוף בציצי',
                        description: 'מנהלת המטבח מרעיבה את פייפר אחרי שהעליבה את האוכל שלה, ופייפר מתקשה להביע התנצלות משביעת רצון.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABckPBPHb0ElGJY8YLGbyeAO7_x9U1r-Q-8iVPnZRxdRXBIRA-JU3iGcUTzn8aipVVNPK1yL4EjudmDkP9CORgySj3ksOhLNAYU_bobAju__F8l4n.jpg?r=3a0",
                        length: 53
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/cobra-kai.jpg',
                tags: ["סוחף", "נוגע ללב", "מלהיב"],
                title: "קוברה קאי",
                description: "סדרת המשך לסרטי \"קראטה קיד\" שבה מתחדשת היריבות בין ג'וני לדניאל, עשרות שנים אחרי הקרב ששינה את חייהם.",
                metaData: {
                    participants: "ראלף מאצ'יו, ויליאם זבקה, שולו מרידוונייה, עוד",
                    genres: "דרמות טלוויזיה, קומדיות טלוויזיה, תוכניות פעולה והרפתקאות",
                    tags: "נוגע ללב, מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'נשראת צעיר',
                        description: "ג'וני הוא שתיין כבד שחי כבר עשרות שנים בצל ההפסד ליריבו דניאל. כשהוא מגיע לתחתית, הוא מחליט לפתוח דוג'ו קראטה חדש – קוברה קאי.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUENODFpasEIK1Qe52lny4oqVBeGnibGI5ceAbuQRNRQgXsR48iOuYgDuTD-_wQ70qR6rHfhlwLeO_yCkRN3omlT8TdMHHci01xflCZdMmehC-rR.jpg?r=983",
                        length: 29
                    },
                    {
                        id: 2,
                        title: 'הכה ראשון',
                        description: "דניאל מגלה את הדוג'ו החדש של קוברה קאי והדבר מטריד אותו. בהמשך הוא שומע מקיילר, הבחור שסאם יוצאת איתו, על קטטה אלימה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ9QWhExyV_0gL-S_tpCugAIP9Ww0pYQOn9NQOBsQyJCHh4FMvfdEZHbgzgCxkBNoFNhHf7AYe7SEFpNE5HswFu93FjCsTITEMOz51X6R766LwXu.jpg?r=fb0",
                        length: 28
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-ranch.jpg',
                tags: ["בועט", "אמוציונלי", "סיטקום"],
                title: "החווה",
                description: "הניסיון של קולט להפוך לספורטאי מקצועי לא הצליח. עכשיו הוא עוזר לאביו ולאחיו להחזיק את החווה מעל המים ומנסה להבין איך הוא משתלב במשפחה.",
                metaData: {
                    participants: "אשטון קוצ'ר, סם אליוט, דברה וינגר, עוד",
                    genres: "קומדיות סיטקום, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "בועט, אמוציונלי"
                },
                items: [
                    {
                        id: 1,
                        title: 'Back Where I Come From',
                        description: "כשקולט בנט שב הביתה מקנדה למבחנים בקבוצה המקצוענית למחצה של דנבר, הוא מבין שהחווה של משפחתו נקלעה לקשיים.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVsOiGXUCycKLb_mZUWN59_DpLTFqcgsg3cHuNofOiLcpu5eDQDruXUyOoPej7FaRBqItdJy38yXgfLd8x-6gHMBGxfNjivbsF4v-zNRAPYEhY8k.jpg?r=485",
                        length: 29
                    },
                    {
                        id: 2,
                        title: 'Some People Change',
                        description: "קולט פוגש חברה לשעבר בבר של מגי וחולק בקבוק וויסקי וזכרונות מהעבר עם רוסטר. זכיה בחיבתו המחודשת של בו מתגלה כמשימה אבודה.",
                        thumbnail: "https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSXdKVdBeI4ytV0XkPwB7qT2MZDdeRH-4ffMCslQOWLRBC03KILRPl5MEee80uNqR9DLJ0psjgBagD-Swpx-VQiUWGLKr7PpCMnjr-WmJ-JDrinV.jpg?r=e91",
                        length: 32
                    },
                ]
            },
        ]
    },
    {
        title: 'תוכניות טלוויזיה על פשע',
        cubes: [
            {
                imgSrc: 'assets/thumbnails/stay-close.jpg',
                tags: ["מקברי", "מותח", "אמוציונלי"],
                title: "תישאר קרוב",
                description: "קרלטון פלין נעלם בדיוק ביום השנה ה-17 להיעלמותו של סטיוארט גרין, ומחולל תגובת שרשרת בחייהם של האנשים שקשורים אל שניהם.",
                metaData: {
                    participants: "קאש ג'מבו, ג'יימס נסביט, ריצ'רד ארמיטג', עוד",
                    genres: "קומדיות סיטקום, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "מקברי, מותח, אמוציונלי"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "החתונה של מייגן פירס הולכת ומתקרבת, ואורחת מהעבר מגיעה ומטרידה אותה. הבלש מייק ברום מוצא קווי דמיון בין מקרה חדש של היעלמות לתיק ישן ולא פתור.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUJ_9YWzZPLu3bi116RGED3ooTEnXNESVE-c8Eif5nnh4azyr3prtYNOgKDKSoSHg78EXVfW8UbRSq3hbkAdv3dejRVtUzxqY25wPp588F1vk3HK.jpg?r=fdd",
                        length: 53
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: "מייגן מנסה לחשוף את האמת על סטיוארט ומבקשת עזרה מחבר ותיק. עוד ועוד מקרים של נעדרים מתחילים להצטבר, וברום חושד שיש ביניהם קשר.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUpmtfrXei2IH7GhG8t8qcHcsEIXCg0tTUPEfG8Cras1t3uSUflq0-rnr8rfI63ZRh0QXAsbQVp1hyK3sW7e_5aaOQLpSLEi-S8x8MF2UTtqGj3i.jpg?r=46e",
                        length: 45
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/unauthorized-living.jpg',
                tags: ["מחוספס", "אמוציונלי", "מלהיב"],
                title: "רשות לחיות",
                description: "ברון סמים מגליסיה מסתיר שהוא חולה באלצהיימר ומתכנן לפרוש לגמלאות. בינתיים, הסגן שלו זומם לגזול מהיורש את האימפריה.",
                metaData: {
                    participants: "חוסה קורונדו, אלכס גונסלס, קלאודיה טרייסאק, עוד",
                    genres: "תוכניות טלוויזיה על פשע, ספרדי, סדרות המבוססות על ספרים",
                    tags: "מחוספס, אמוציונלי, מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "בעקבות אבחון רפואי, טייקון סמים בשם נמו רוקם תוכניות חדשות שמפתיעות את קרוביו. לארה, עובדת מפעל, נלחמת כדי למלא את משאלותיה של אימא שלה השרויה בתרדמת.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS3fwQgTsIOelBFlOXfxwKoYyRHdblUIs4Agfd3vtLbe__WrQLu-oArX0mHdx9CUnkQ5VKgCLtvwWf3lZBoSfAzueOswMap6Tx-M3vSVIMLJFtmX.jpg?r=ea4",
                        length: 79
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: "נמו מנסה לטשטש את עקבותיו כשגופה ומכולה אבודה מתגלות. מריו מבצע מעשה אכזרי כדי לזכות בחיבתה של נינה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTLjSkcSdsyaEJ6bvAwbvT1pMwusgdDK1OwDYwzZBnxyPmIIf7SAPZG0K-zqpeqN8HAzBBgxDSuNJtglQZmRUuYfRore94XOW5BmW_9HyUEoUeUN.jpg?r=eb2",
                        length: 76
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/peaky-blinders.jpg',
                tags: ["אלים", "תקופתי", "דרמה"],
                title: "כנופיית ברמינגהם",
                description: "בשנת 1919, כנופיה ידועה לשמצה פועלת בברמינגהם שבאנגליה. מנהיגהּ האכזרי, תומס שלבי, נחוש להגיע רחוק בכל מחיר.",
                metaData: {
                    participants: "קיליאן מרפי, סם ניל, הלן מקרורי, עוד",
                    genres: "תוכניות טלוויזיה על פשע, בריטי, כותרים תקופתיים",
                    tags: "אלים"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "מנהיג הכנופיה השאפתני תומס שלבי מזהה הזדמנות להתקדם בחיים הודות לתיבה של רובים שנעלמה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRVuj3UIyFlQD7lpQQgqwtpilT0espIdS9nKWFeFoTY-qeKujNOLQUXJwNqhR7VlUUeH7TYf1AZfSmyNUf5QV7yQX6v0-lUAmYCiqMkMRUGJpUyO.webp?r=c76",
                        length: 57
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: 'תומס מתגרה במנהיג מקומי ו"מוכר" מירוץ סוסים, ופותח במלחמה עם משפחה של צוענים. פקד קמפבל יוזם פשיטה אכזרית.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFB56KFAG2asGyt2yjdVBF8wweGvMUMZwiijywJTV7KYiaMWcbnddaCryZcVECcmoWWRpwBgOVyvcEAfq4OGQUad-JEkbdcYejH_opY6Agc6N82.webp?r=c06",
                        length: 58
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/blacklist.webp',
                tags: ["מלהיב", "מתח", "דרמה"],
                title: "הרשימה השחורה",
                description: "אחרי שהסגיר את עצמו לידי המשטרה, אסיר נמלט ומבריק מציע לעזור ל-FBI לתפוס נבלים אחרים בתנאי שאליזבת קין, מאפיינת הפרופילים החדשה, תהיה השותפה שלו.",
                metaData: {
                    participants: "ג'יימס ספיידר, מייגן בון, דייגו קלאטנהוף, עוד",
                    genres: "תוכניות טלוויזיה על פשע, סדרות מתח, דרמות טלוויזיה",
                    tags: "מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פילוט',
                        description: "ארכי-פושע מסגיר את עצמו לסוכני ה-FBI ומציע להם הצעה שמשאירה אותם בהלם – ללכוד טרוריסט חמקמק. אבל הוא מוכן לדבר רק עם מאפיינת פרופילים ספציפית.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABavFz5FnkwBai3LYqrFZKJ3zIPUWSgO_CrMInLLfJNZBDfVnzWsFsiRzmshWRT21BMF3I7qCWJ31WuSA6aEokELRsyB3rrYvk0nLDNI8YX30CU0_.webp?r=759",
                        length: 45
                    },
                    {
                        id: 2,
                        title: "העצמאי (מס' 145)",
                        description: 'ליז ורד עוקבים אחרי רוצח שמסווה את רציחותיו בתוך אסונות גדולים. מחלקת המשפטים מתקשה להבין את מניעיו של רד.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABawqSM5IgC3grC11AUhrN742iEOKJzV6Zi7loWomC4FjGeN0Cy169X3Mp5yf80Bd8feEHHXhbwTBDgghi34aw6jY1jTbVMumFUZyFSbcbK8zTViP.webp?r=4cb",
                        length: 40
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/locked-up.jpg',
                tags: ["מתח", "להטב\"ק", "בית-סוהר"],
                title: "בפנים",
                description: "בחורה צעירה נשלחת למאסר על מעילה שביצעה עבור בן זוגה הערמומי. כשהמציאות הקשוחה של הכלא מקלפת ממנה את שרידי התמימות האחרונים, היא מבינה שעליה ללמוד לשרוד – ומהר.",
                metaData: {
                    participants: "נג'ווה נימרי, מגי סיוונטוס, איסטיאר קסטרו, עוד",
                    genres: "תוכניות טלוויזיה על פשע, ספרדי, סדרות מתח",
                    tags: "מותח"
                },
                items: [
                    {
                        id: 1,
                        title: 'כלבה מצורעת',
                        description: "החיים של מקרֶנה מתרסקים כשהיא נידונה לשבע שנות מאסר בגין עבירות מס. את העובדה הזאת היא מתקשה להסתיר מהוריה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV6u-Ynrw3J03JgOw_HyFDkhfaYvHf1BVGmo5OJQ_38eebc8YHzb_TtSnUb7zBSAINIR9ZZ8pRWo1UioLBfNy5e9iTA-HAq57QLNsR2Qx0nL4lbb.jpg?r=1b1",
                        length: 74
                    },
                    {
                        id: 2,
                        title: "לתפור את טינקרבל",
                        description: 'סולֶה סובלת ממשבר בריאותי. מקרנה מנסה למצוא דרך להזהיר את הוריה מפני סכנה מיידית.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaYEWlb-siPvQJrLO_TiTAIe9qE9m61n1YCiqkxG3iUwLRv_uBxE9mAHG7oueCxR9S-4ZsQpTcUbxttaN15s2j2jVXD1ioR1RpNQ5dBz2sqjSYIJ.jpg?r=f35",
                        length: 71
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/mr-robot.webp',
                tags: ["פרובוקטיבי", "פסיכולוגי", "מתח"],
                title: "מר רובוט",
                description: "מהנדס אבטחת סייבר ביום, האקר פורע חוק בלילה. כשקבוצה מסתורית של האקרים מגייסת אותו, הוא יוצא לחסל תאגיד בינלאומי.",
                metaData: {
                    participants: "רמי מאלק, כריסטיאן סלייטר, פורשיה דאבלדיי, עוד",
                    genres: "תוכניות טלוויזיה על פשע, תוכניות טלוויזיה פוליטיות, סדרות מתח",
                    tags: "פרובוקטיבי, מותח"
                },
                items: [
                    {
                        id: 1,
                        title: 'eps1.0_hellofriend.mov',
                        description: 'אליוט מתמודד עם פריצת אבטחה חמורה ב"אולסייף", ודמות מסתורית שולחת לו הזמנה מוצפנת להצטרף לקבוצת ההאקרים "אף - סוסייטי".',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR43bqStIvIC7EQUWgmE1eeuZI9VjZDDO_8gHnrNH6Qv9QnPSE1Jehuoz5_pijHYFO0W_pE7iSbBIiIekna-j0ZVbjX0FMLfxU1S8_WHw-PxudQE.webp?r=dc5",
                        length: 65
                    },
                    {
                        id: 2,
                        title: "eps1.1_ones-and-zer0es.mpeg",
                        description: 'אליוט מקבל הצעת עבודה מ"אי-קורפ", והוא מתלבט בין שתי אפשרויות מסוכנות וחושש לשלומה של שיילה.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU2NYPO5SCl1Kh0u-rKwB6-ZLQfsPVcPUEwpZYkveGgjkeBU3uZf8vh2s3s4fX4LOhjgFSD6-oxaoDiv4b2ObNOSl5FMWu_csyQef9utsfQC_AAp.webp?r=a75",
                        length: 47
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/stay-close.jpg',
                tags: ["מקברי", "מותח", "אמוציונלי"],
                title: "תישאר קרוב",
                description: "קרלטון פלין נעלם בדיוק ביום השנה ה-17 להיעלמותו של סטיוארט גרין, ומחולל תגובת שרשרת בחייהם של האנשים שקשורים אל שניהם.",
                metaData: {
                    participants: "קאש ג'מבו, ג'יימס נסביט, ריצ'רד ארמיטג', עוד",
                    genres: "קומדיות סיטקום, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "מקברי, מותח, אמוציונלי"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "החתונה של מייגן פירס הולכת ומתקרבת, ואורחת מהעבר מגיעה ומטרידה אותה. הבלש מייק ברום מוצא קווי דמיון בין מקרה חדש של היעלמות לתיק ישן ולא פתור.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUJ_9YWzZPLu3bi116RGED3ooTEnXNESVE-c8Eif5nnh4azyr3prtYNOgKDKSoSHg78EXVfW8UbRSq3hbkAdv3dejRVtUzxqY25wPp588F1vk3HK.jpg?r=fdd",
                        length: 53
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: "מייגן מנסה לחשוף את האמת על סטיוארט ומבקשת עזרה מחבר ותיק. עוד ועוד מקרים של נעדרים מתחילים להצטבר, וברום חושד שיש ביניהם קשר.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUpmtfrXei2IH7GhG8t8qcHcsEIXCg0tTUPEfG8Cras1t3uSUflq0-rnr8rfI63ZRh0QXAsbQVp1hyK3sW7e_5aaOQLpSLEi-S8x8MF2UTtqGj3i.jpg?r=46e",
                        length: 45
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/unauthorized-living.jpg',
                tags: ["מחוספס", "אמוציונלי", "מלהיב"],
                title: "רשות לחיות",
                description: "ברון סמים מגליסיה מסתיר שהוא חולה באלצהיימר ומתכנן לפרוש לגמלאות. בינתיים, הסגן שלו זומם לגזול מהיורש את האימפריה.",
                metaData: {
                    participants: "חוסה קורונדו, אלכס גונסלס, קלאודיה טרייסאק, עוד",
                    genres: "תוכניות טלוויזיה על פשע, ספרדי, סדרות המבוססות על ספרים",
                    tags: "מחוספס, אמוציונלי, מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "בעקבות אבחון רפואי, טייקון סמים בשם נמו רוקם תוכניות חדשות שמפתיעות את קרוביו. לארה, עובדת מפעל, נלחמת כדי למלא את משאלותיה של אימא שלה השרויה בתרדמת.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS3fwQgTsIOelBFlOXfxwKoYyRHdblUIs4Agfd3vtLbe__WrQLu-oArX0mHdx9CUnkQ5VKgCLtvwWf3lZBoSfAzueOswMap6Tx-M3vSVIMLJFtmX.jpg?r=ea4",
                        length: 79
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: "נמו מנסה לטשטש את עקבותיו כשגופה ומכולה אבודה מתגלות. מריו מבצע מעשה אכזרי כדי לזכות בחיבתה של נינה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTLjSkcSdsyaEJ6bvAwbvT1pMwusgdDK1OwDYwzZBnxyPmIIf7SAPZG0K-zqpeqN8HAzBBgxDSuNJtglQZmRUuYfRore94XOW5BmW_9HyUEoUeUN.jpg?r=eb2",
                        length: 76
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/peaky-blinders.jpg',
                tags: ["אלים", "תקופתי", "דרמה"],
                title: "כנופיית ברמינגהם",
                description: "בשנת 1919, כנופיה ידועה לשמצה פועלת בברמינגהם שבאנגליה. מנהיגהּ האכזרי, תומס שלבי, נחוש להגיע רחוק בכל מחיר.",
                metaData: {
                    participants: "קיליאן מרפי, סם ניל, הלן מקרורי, עוד",
                    genres: "תוכניות טלוויזיה על פשע, בריטי, כותרים תקופתיים",
                    tags: "אלים"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "מנהיג הכנופיה השאפתני תומס שלבי מזהה הזדמנות להתקדם בחיים הודות לתיבה של רובים שנעלמה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRVuj3UIyFlQD7lpQQgqwtpilT0espIdS9nKWFeFoTY-qeKujNOLQUXJwNqhR7VlUUeH7TYf1AZfSmyNUf5QV7yQX6v0-lUAmYCiqMkMRUGJpUyO.webp?r=c76",
                        length: 57
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: 'תומס מתגרה במנהיג מקומי ו"מוכר" מירוץ סוסים, ופותח במלחמה עם משפחה של צוענים. פקד קמפבל יוזם פשיטה אכזרית.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFB56KFAG2asGyt2yjdVBF8wweGvMUMZwiijywJTV7KYiaMWcbnddaCryZcVECcmoWWRpwBgOVyvcEAfq4OGQUad-JEkbdcYejH_opY6Agc6N82.webp?r=c06",
                        length: 58
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/blacklist.webp',
                tags: ["מלהיב", "מתח", "דרמה"],
                title: "הרשימה השחורה",
                description: "אחרי שהסגיר את עצמו לידי המשטרה, אסיר נמלט ומבריק מציע לעזור ל-FBI לתפוס נבלים אחרים בתנאי שאליזבת קין, מאפיינת הפרופילים החדשה, תהיה השותפה שלו.",
                metaData: {
                    participants: "ג'יימס ספיידר, מייגן בון, דייגו קלאטנהוף, עוד",
                    genres: "תוכניות טלוויזיה על פשע, סדרות מתח, דרמות טלוויזיה",
                    tags: "מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פילוט',
                        description: "ארכי-פושע מסגיר את עצמו לסוכני ה-FBI ומציע להם הצעה שמשאירה אותם בהלם – ללכוד טרוריסט חמקמק. אבל הוא מוכן לדבר רק עם מאפיינת פרופילים ספציפית.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABavFz5FnkwBai3LYqrFZKJ3zIPUWSgO_CrMInLLfJNZBDfVnzWsFsiRzmshWRT21BMF3I7qCWJ31WuSA6aEokELRsyB3rrYvk0nLDNI8YX30CU0_.webp?r=759",
                        length: 45
                    },
                    {
                        id: 2,
                        title: "העצמאי (מס' 145)",
                        description: 'ליז ורד עוקבים אחרי רוצח שמסווה את רציחותיו בתוך אסונות גדולים. מחלקת המשפטים מתקשה להבין את מניעיו של רד.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABawqSM5IgC3grC11AUhrN742iEOKJzV6Zi7loWomC4FjGeN0Cy169X3Mp5yf80Bd8feEHHXhbwTBDgghi34aw6jY1jTbVMumFUZyFSbcbK8zTViP.webp?r=4cb",
                        length: 40
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/locked-up.jpg',
                tags: ["מתח", "להטב\"ק", "בית-סוהר"],
                title: "בפנים",
                description: "בחורה צעירה נשלחת למאסר על מעילה שביצעה עבור בן זוגה הערמומי. כשהמציאות הקשוחה של הכלא מקלפת ממנה את שרידי התמימות האחרונים, היא מבינה שעליה ללמוד לשרוד – ומהר.",
                metaData: {
                    participants: "נג'ווה נימרי, מגי סיוונטוס, איסטיאר קסטרו, עוד",
                    genres: "תוכניות טלוויזיה על פשע, ספרדי, סדרות מתח",
                    tags: "מותח"
                },
                items: [
                    {
                        id: 1,
                        title: 'כלבה מצורעת',
                        description: "החיים של מקרֶנה מתרסקים כשהיא נידונה לשבע שנות מאסר בגין עבירות מס. את העובדה הזאת היא מתקשה להסתיר מהוריה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV6u-Ynrw3J03JgOw_HyFDkhfaYvHf1BVGmo5OJQ_38eebc8YHzb_TtSnUb7zBSAINIR9ZZ8pRWo1UioLBfNy5e9iTA-HAq57QLNsR2Qx0nL4lbb.jpg?r=1b1",
                        length: 74
                    },
                    {
                        id: 2,
                        title: "לתפור את טינקרבל",
                        description: 'סולֶה סובלת ממשבר בריאותי. מקרנה מנסה למצוא דרך להזהיר את הוריה מפני סכנה מיידית.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaYEWlb-siPvQJrLO_TiTAIe9qE9m61n1YCiqkxG3iUwLRv_uBxE9mAHG7oueCxR9S-4ZsQpTcUbxttaN15s2j2jVXD1ioR1RpNQ5dBz2sqjSYIJ.jpg?r=f35",
                        length: 71
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/mr-robot.webp',
                tags: ["פרובוקטיבי", "פסיכולוגי", "מתח"],
                title: "מר רובוט",
                description: "מהנדס אבטחת סייבר ביום, האקר פורע חוק בלילה. כשקבוצה מסתורית של האקרים מגייסת אותו, הוא יוצא לחסל תאגיד בינלאומי.",
                metaData: {
                    participants: "רמי מאלק, כריסטיאן סלייטר, פורשיה דאבלדיי, עוד",
                    genres: "תוכניות טלוויזיה על פשע, תוכניות טלוויזיה פוליטיות, סדרות מתח",
                    tags: "פרובוקטיבי, מותח"
                },
                items: [
                    {
                        id: 1,
                        title: 'eps1.0_hellofriend.mov',
                        description: 'אליוט מתמודד עם פריצת אבטחה חמורה ב"אולסייף", ודמות מסתורית שולחת לו הזמנה מוצפנת להצטרף לקבוצת ההאקרים "אף - סוסייטי".',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR43bqStIvIC7EQUWgmE1eeuZI9VjZDDO_8gHnrNH6Qv9QnPSE1Jehuoz5_pijHYFO0W_pE7iSbBIiIekna-j0ZVbjX0FMLfxU1S8_WHw-PxudQE.webp?r=dc5",
                        length: 65
                    },
                    {
                        id: 2,
                        title: "eps1.1_ones-and-zer0es.mpeg",
                        description: 'אליוט מקבל הצעת עבודה מ"אי-קורפ", והוא מתלבט בין שתי אפשרויות מסוכנות וחושש לשלומה של שיילה.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU2NYPO5SCl1Kh0u-rKwB6-ZLQfsPVcPUEwpZYkveGgjkeBU3uZf8vh2s3s4fX4LOhjgFSD6-oxaoDiv4b2ObNOSl5FMWu_csyQef9utsfQC_AAp.webp?r=a75",
                        length: 47
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/stay-close.jpg',
                tags: ["מקברי", "מותח", "אמוציונלי"],
                title: "תישאר קרוב",
                description: "קרלטון פלין נעלם בדיוק ביום השנה ה-17 להיעלמותו של סטיוארט גרין, ומחולל תגובת שרשרת בחייהם של האנשים שקשורים אל שניהם.",
                metaData: {
                    participants: "קאש ג'מבו, ג'יימס נסביט, ריצ'רד ארמיטג', עוד",
                    genres: "קומדיות סיטקום, דרמות טלוויזיה, קומדיות טלוויזיה",
                    tags: "מקברי, מותח, אמוציונלי"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "החתונה של מייגן פירס הולכת ומתקרבת, ואורחת מהעבר מגיעה ומטרידה אותה. הבלש מייק ברום מוצא קווי דמיון בין מקרה חדש של היעלמות לתיק ישן ולא פתור.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUJ_9YWzZPLu3bi116RGED3ooTEnXNESVE-c8Eif5nnh4azyr3prtYNOgKDKSoSHg78EXVfW8UbRSq3hbkAdv3dejRVtUzxqY25wPp588F1vk3HK.jpg?r=fdd",
                        length: 53
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: "מייגן מנסה לחשוף את האמת על סטיוארט ומבקשת עזרה מחבר ותיק. עוד ועוד מקרים של נעדרים מתחילים להצטבר, וברום חושד שיש ביניהם קשר.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUpmtfrXei2IH7GhG8t8qcHcsEIXCg0tTUPEfG8Cras1t3uSUflq0-rnr8rfI63ZRh0QXAsbQVp1hyK3sW7e_5aaOQLpSLEi-S8x8MF2UTtqGj3i.jpg?r=46e",
                        length: 45
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/unauthorized-living.jpg',
                tags: ["מחוספס", "אמוציונלי", "מלהיב"],
                title: "רשות לחיות",
                description: "ברון סמים מגליסיה מסתיר שהוא חולה באלצהיימר ומתכנן לפרוש לגמלאות. בינתיים, הסגן שלו זומם לגזול מהיורש את האימפריה.",
                metaData: {
                    participants: "חוסה קורונדו, אלכס גונסלס, קלאודיה טרייסאק, עוד",
                    genres: "תוכניות טלוויזיה על פשע, ספרדי, סדרות המבוססות על ספרים",
                    tags: "מחוספס, אמוציונלי, מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "בעקבות אבחון רפואי, טייקון סמים בשם נמו רוקם תוכניות חדשות שמפתיעות את קרוביו. לארה, עובדת מפעל, נלחמת כדי למלא את משאלותיה של אימא שלה השרויה בתרדמת.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS3fwQgTsIOelBFlOXfxwKoYyRHdblUIs4Agfd3vtLbe__WrQLu-oArX0mHdx9CUnkQ5VKgCLtvwWf3lZBoSfAzueOswMap6Tx-M3vSVIMLJFtmX.jpg?r=ea4",
                        length: 79
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: "נמו מנסה לטשטש את עקבותיו כשגופה ומכולה אבודה מתגלות. מריו מבצע מעשה אכזרי כדי לזכות בחיבתה של נינה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTLjSkcSdsyaEJ6bvAwbvT1pMwusgdDK1OwDYwzZBnxyPmIIf7SAPZG0K-zqpeqN8HAzBBgxDSuNJtglQZmRUuYfRore94XOW5BmW_9HyUEoUeUN.jpg?r=eb2",
                        length: 76
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/peaky-blinders.jpg',
                tags: ["אלים", "תקופתי", "דרמה"],
                title: "כנופיית ברמינגהם",
                description: "בשנת 1919, כנופיה ידועה לשמצה פועלת בברמינגהם שבאנגליה. מנהיגהּ האכזרי, תומס שלבי, נחוש להגיע רחוק בכל מחיר.",
                metaData: {
                    participants: "קיליאן מרפי, סם ניל, הלן מקרורי, עוד",
                    genres: "תוכניות טלוויזיה על פשע, בריטי, כותרים תקופתיים",
                    tags: "אלים"
                },
                items: [
                    {
                        id: 1,
                        title: 'פרק 1',
                        description: "מנהיג הכנופיה השאפתני תומס שלבי מזהה הזדמנות להתקדם בחיים הודות לתיבה של רובים שנעלמה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRVuj3UIyFlQD7lpQQgqwtpilT0espIdS9nKWFeFoTY-qeKujNOLQUXJwNqhR7VlUUeH7TYf1AZfSmyNUf5QV7yQX6v0-lUAmYCiqMkMRUGJpUyO.webp?r=c76",
                        length: 57
                    },
                    {
                        id: 2,
                        title: 'פרק 2',
                        description: 'תומס מתגרה במנהיג מקומי ו"מוכר" מירוץ סוסים, ופותח במלחמה עם משפחה של צוענים. פקד קמפבל יוזם פשיטה אכזרית.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFB56KFAG2asGyt2yjdVBF8wweGvMUMZwiijywJTV7KYiaMWcbnddaCryZcVECcmoWWRpwBgOVyvcEAfq4OGQUad-JEkbdcYejH_opY6Agc6N82.webp?r=c06",
                        length: 58
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/blacklist.webp',
                tags: ["מלהיב", "מתח", "דרמה"],
                title: "הרשימה השחורה",
                description: "אחרי שהסגיר את עצמו לידי המשטרה, אסיר נמלט ומבריק מציע לעזור ל-FBI לתפוס נבלים אחרים בתנאי שאליזבת קין, מאפיינת הפרופילים החדשה, תהיה השותפה שלו.",
                metaData: {
                    participants: "ג'יימס ספיידר, מייגן בון, דייגו קלאטנהוף, עוד",
                    genres: "תוכניות טלוויזיה על פשע, סדרות מתח, דרמות טלוויזיה",
                    tags: "מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פילוט',
                        description: "ארכי-פושע מסגיר את עצמו לסוכני ה-FBI ומציע להם הצעה שמשאירה אותם בהלם – ללכוד טרוריסט חמקמק. אבל הוא מוכן לדבר רק עם מאפיינת פרופילים ספציפית.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABavFz5FnkwBai3LYqrFZKJ3zIPUWSgO_CrMInLLfJNZBDfVnzWsFsiRzmshWRT21BMF3I7qCWJ31WuSA6aEokELRsyB3rrYvk0nLDNI8YX30CU0_.webp?r=759",
                        length: 45
                    },
                    {
                        id: 2,
                        title: "העצמאי (מס' 145)",
                        description: 'ליז ורד עוקבים אחרי רוצח שמסווה את רציחותיו בתוך אסונות גדולים. מחלקת המשפטים מתקשה להבין את מניעיו של רד.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABawqSM5IgC3grC11AUhrN742iEOKJzV6Zi7loWomC4FjGeN0Cy169X3Mp5yf80Bd8feEHHXhbwTBDgghi34aw6jY1jTbVMumFUZyFSbcbK8zTViP.webp?r=4cb",
                        length: 40
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/locked-up.jpg',
                tags: ["מתח", "להטב\"ק", "בית-סוהר"],
                title: "בפנים",
                description: "בחורה צעירה נשלחת למאסר על מעילה שביצעה עבור בן זוגה הערמומי. כשהמציאות הקשוחה של הכלא מקלפת ממנה את שרידי התמימות האחרונים, היא מבינה שעליה ללמוד לשרוד – ומהר.",
                metaData: {
                    participants: "נג'ווה נימרי, מגי סיוונטוס, איסטיאר קסטרו, עוד",
                    genres: "תוכניות טלוויזיה על פשע, ספרדי, סדרות מתח",
                    tags: "מותח"
                },
                items: [
                    {
                        id: 1,
                        title: 'כלבה מצורעת',
                        description: "החיים של מקרֶנה מתרסקים כשהיא נידונה לשבע שנות מאסר בגין עבירות מס. את העובדה הזאת היא מתקשה להסתיר מהוריה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV6u-Ynrw3J03JgOw_HyFDkhfaYvHf1BVGmo5OJQ_38eebc8YHzb_TtSnUb7zBSAINIR9ZZ8pRWo1UioLBfNy5e9iTA-HAq57QLNsR2Qx0nL4lbb.jpg?r=1b1",
                        length: 74
                    },
                    {
                        id: 2,
                        title: "לתפור את טינקרבל",
                        description: 'סולֶה סובלת ממשבר בריאותי. מקרנה מנסה למצוא דרך להזהיר את הוריה מפני סכנה מיידית.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaYEWlb-siPvQJrLO_TiTAIe9qE9m61n1YCiqkxG3iUwLRv_uBxE9mAHG7oueCxR9S-4ZsQpTcUbxttaN15s2j2jVXD1ioR1RpNQ5dBz2sqjSYIJ.jpg?r=f35",
                        length: 71
                    },
                ]
            },
        ]
    },
    {
        title: 'תוכניות רטרו',
        cubes: [
            {
                imgSrc: 'assets/thumbnails/gilmore-girls.webp',
                tags: ["שנון", "אינטימי", "רומנטי"],
                title: "בנות גילמור",
                description: "לורליי, אם חד-הורית, מגדלת את רורי, בתה המחוננת ששואפת ללמוד באוניברסיטה פרטית ויוקרתית, והקשר ביניהן רצוף דיאלוגים שנונים.",
                metaData: {
                    participants: "לורן גרהאם, אלקסיס בלדל, סקוט פטרסון, עוד",
                    genres: "דרמות טלוויזיה רומנטיות, קומדיות טלוויזיה רומנטיות, סדרות נוער",
                    tags: "שנון, אינטימי, רומנטי"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט',
                        description: "רורי מתקבלת למכינה יוקרתית, ולורליי חייבת לכבוש את גאוותה ולבקש מהוריה העשירים לסייע בתשלום שכר הלימוד.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUM8TfGXO0faZhjiRnyyxXdwTGm2lHiiGyzT7up5fDnvNsJDM3xoZ-bj62H-fE_FBBp9G3ny2A_PQq0G_2l0r1HQ6wVDnvop-Oo8Luwdz6tkV2n.webp?r=0fd",
                        length: 44
                    },
                    {
                        id: 2,
                        title: "היום הראשון של לורליי בצ'ילטון",
                        description: "יומה הראשון של רורי בצ'ילטון אינו מתנהל על מי מנוחות: לבושה של לורליי מעליב את אמילי ואת המנהל ואחר כך היא פוגשת כמה חברים מעצבנים לספסל הלימודים.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY0cVevxVP1wSNzVpup4gR3Y-n4u9kbrkAayj_ZZ_sLpwISHfPboIho7yci9MMXbP0ZGKDK9PMYmHLWGMD0Isf7Oenp4k7D9jFOFP-CXQcunE3t7.webp?r=38b",
                        length: 43
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/south-park.webp',
                tags: ["אבסורדי", "הומור בוטה", "שנון"],
                title: "סאות' פארק",
                description: "קומדיית הסיטקום הסטירית, הלועגת בשמחה לטרנדים, לידוענים ולפוליטיקאים, מציגה את העולם דרך עיניהם של ארבעה ילדים גסי רוח.",
                metaData: {
                    participants: "מאט סטון, טריי פארקר, אייזק הייז, עוד",
                    genres: "קומדיות סיטקום, אנימציה למבוגרים, קומדיות טלוויזיה",
                    tags: "אבסורדי, הומור בוטה, שנון"
                },
                items: [
                    {
                        id: 1,
                        title: 'לכו להתממן',
                        description: "הבנים מקימים חברת סטארט-אפ בתקווה שלא לעבוד עוד לעולם, אבל מסתבכים עם ליגת ה-NFL בגלל השם שבחרו לחברה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZf8Lj2fsw1XFeBuRB9i-4lhUfTko4TyXNc7O-HIGVNupynOuh8dCRAKuRVHzlSbVD55EwVBrhnToU6IFXWKmhvDpz9upuT5ze2zseuPtD4vxqaK.webp?r=5df",
                        length: 22
                    },
                    {
                        id: 2,
                        title: 'אבולה ללא גלוטן',
                        description: "מוות כתוצאה מתזונה לקויה מעורר פאניקה, וסאות'פארק הופכת לעיר נטולת הגלוטן הראשונה באמריקה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWCQ6aoX1GwcbIAVeZ8hjtlJYY71Q_OXwubMy-1NFVODpn72BXyd18J6JDxF1VF-y_BozX6KU5XpElQFm4J6lztNR4XG8f3gU77Tk46zHCMNVAWG.webp?r=138",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-it-crowd.webp',
                tags: ["אבסורדי", "שנון", "בועט"],
                title: "צוות איי.טי.",
                description: "יחד עם מנהלת נטולת כל ידע טכנולוגי, צמד חנונים מפיקים את המיטב מהעבודה בתחום ה-IT בחברה שהבעלים והמנהל החדש שלה הוא אידיוט מושלם.",
                metaData: {
                    participants: "כריס אודאוד, ריצ'רד איואדה, קתרין פרקינסון, עוד",
                    genres: "בריטי, קומדיות סיטקום, קומדיות טלוויזיה",
                    tags: "אבסורדי, שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'ריבה מאתמול',
                        description: "עם קורות חיים מרשימים ומזויפים לגמרי, ועם כמה מושגים טכניים שהמציאה בזמן הראיון, ג'ן זוכה במשרה ב'תעשיות ריינהולם'.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSsPsjznRqCTpnBtZv1pgLy50fUvUp_l489vgl1dOl9GNVbRwE383bRLiraiUr3xS4qiBqhi3fs8xN-qKfRixZBgHcBxEBHxsFsFaZc_fyOO5xaE.webp?r=693",
                        length: 23
                    },
                    {
                        id: 2,
                        title: "ג'ן ההרסנית",
                        description: "דנהולם מאלץ את כל עובדי 'תעשיות ריינהולם' לעבור בדיקת לחץ, ואז מאיים לפטר את כל מי שעדיין לחוץ בסוף היום.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc3xugr9ibbATh1BTsq3KJuU6Q_Iw4LDMgCWlxmB9Xm3diht5tJ-S-G0T-yvBbIAPX4PUe_ObhmGFIvs5DivjHPIaLtitv0YMbhEnZPq0nJZRXCM.webp?r=baa",
                        length: 24
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/startrek.webp',
                tags: ["מד\"ב - חייזרים", "תוכנית מד\"ב", "פעולה"],
                title: "מסע בין כוכבים: הדור הבא",
                description: "עשורים חלפו מאז ההרפתקאות של צוות האנטרפרייז המקורי, ועכשיו קפטן ז'אן-לוק פיקארד מוביל את ספינת האנטרפרייז החדשה למשימות מחקר בעולמות לא מוכרים.",
                metaData: {
                    participants: "פטריק סטיוארט, ג'ונתן פרייקס, לוואר ברטון, עוד",
                    genres: "תוכניות מדע בדיוני, תוכניות פעולה והרפתקאות, דרמות טלוויזיה",
                    tags: "מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פילוט',
                        description: "ארכי-פושע מסגיר את עצמו לסוכני ה-FBI ומציע להם הצעה שמשאירה אותם בהלם – ללכוד טרוריסט חמקמק. אבל הוא מוכן לדבר רק עם מאפיינת פרופילים ספציפית.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABavFz5FnkwBai3LYqrFZKJ3zIPUWSgO_CrMInLLfJNZBDfVnzWsFsiRzmshWRT21BMF3I7qCWJ31WuSA6aEokELRsyB3rrYvk0nLDNI8YX30CU0_.webp?r=759",
                        length: 45
                    },
                    {
                        id: 2,
                        title: "העצמאי (מס' 145)",
                        description: 'ליז ורד עוקבים אחרי רוצח שמסווה את רציחותיו בתוך אסונות גדולים. מחלקת המשפטים מתקשה להבין את מניעיו של רד.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABawqSM5IgC3grC11AUhrN742iEOKJzV6Zi7loWomC4FjGeN0Cy169X3Mp5yf80Bd8feEHHXhbwTBDgghi34aw6jY1jTbVMumFUZyFSbcbK8zTViP.webp?r=4cb",
                        length: 40
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-office.webp',
                tags: ["שנון", "בועט", "סיטקום"],
                title: "המשרד",
                description: 'סדרה קומית מצליחה על מעלליהם של עובדי משרד בחברת הנייר "דאנדר מיפלין", כולל מייקל סקוט, הבוס שחי בסרט.',
                metaData: {
                    participants: "סטיב קארל, ג'ון קראסינסקי, ג'נה פישר, עוד",
                    genres: "קומדיות סיטקום, קומדיות טלוויזיה, תוכניות טלוויזיה אמריקאיות",
                    tags: "שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט',
                        description: "מייקל סקוט, מנהל קלולס בחברת דאנדר מיפלין, מארח צוות צילום שמגיע לתעד את העבודה במשרד ומגלה שמטה החברה שוקל לסגור את הסניף שבניהולו.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV58UXtcbET98UBHugWUGQEyHotdyIXVeF3xubVT_764vAzje_bIZx1ZzMxuTZlH98QbOAU1T124kNZ4ODhuxT90gwjvvK1t0JPtfWNaeK4T3IIv.webp?r=9b7",
                        length: 23
                    },
                    {
                        id: 2,
                        title: 'יום הסובלנות',
                        description: 'העובדים משתתפים בסדנת סובלנות בעקבות תלונות על בדיחה פוגענית שאחד מהם סיפר.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRBu6RCWTMMYmneWn_lkIiYhwpq0ugM2EQW7_jhRIdjy0f8m8ycvRXkm3jS0JyKMvE9l-7HL0MaJ5MmAS6PGB3c-Hl3UY1liPGC9y7dye_3hR8uF.webp?r=9dc",
                        length: 21
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/friends.webp',
                tags: ["שנון", "אקסצנטרי", "סיטקום"],
                title: "חברים",
                description: "סיטקום מצליח שעוקב אחר הרפתקאותיהם הכושלות אך המשעשעות של שישה חברים בגילאי העשרים פלוס  שמתמודדים עם מהמורות בקריירה, בחיים ובאהבה במנהטן של שנות ה-90.",
                metaData: {
                    participants: "ג'ניפר אניסטון, קורטני קוקס, ליסה קודרו, עוד",
                    genres: "קומדיות סיטקום, קומדיות טלוויזיה, תוכניות טלוויזיה אמריקאיות",
                    tags: "שנון, אקסצנטרי"
                },
                items: [
                    {
                        id: 1,
                        title: 'הפרק שבו מוניקה מקבלת שותפה לדירה (פיילוט)',
                        description: "רייצ'ל בורחת מהחתונה שלה ופוגשת את החברים בבית הקפה. רוס מדוכא מהגירושים שלו, אבל עדיין מאוהב ברייצ'ל.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYNxZy-KPW08N_V_2cnzjfvZS5IoQwEq8UlA1afJW0kqOp4J6I6L0uEQtPQlW147Vi9vE3u5jBGuU_CxWcXKrdFZGf-3AYUMuiiBOHVFMIQ0MuFi.webp?r=42d",
                        length: 22
                    },
                    {
                        id: 2,
                        title: 'הפרק עם האולטרה-סאונד',
                        description: 'גרושתו הלסבית של רוס בהיריון ממנו, והוא לא מרוצה משם המשפחה שהיא בוחרת לתינוק.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa7FdcZmBtTko6yr2XCoDwojZjBLchwLh81m8w-L8eLxBKSDMV9Ln7kEC6OC9hNuVHn2A2DyfwvhhsYo7mnmY5pmxKlUWWil3gaPpbp-qiNX-Q21.webp?r=32a",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/gilmore-girls.webp',
                tags: ["שנון", "אינטימי", "רומנטי"],
                title: "בנות גילמור",
                description: "לורליי, אם חד-הורית, מגדלת את רורי, בתה המחוננת ששואפת ללמוד באוניברסיטה פרטית ויוקרתית, והקשר ביניהן רצוף דיאלוגים שנונים.",
                metaData: {
                    participants: "לורן גרהאם, אלקסיס בלדל, סקוט פטרסון, עוד",
                    genres: "דרמות טלוויזיה רומנטיות, קומדיות טלוויזיה רומנטיות, סדרות נוער",
                    tags: "שנון, אינטימי, רומנטי"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט',
                        description: "רורי מתקבלת למכינה יוקרתית, ולורליי חייבת לכבוש את גאוותה ולבקש מהוריה העשירים לסייע בתשלום שכר הלימוד.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQUM8TfGXO0faZhjiRnyyxXdwTGm2lHiiGyzT7up5fDnvNsJDM3xoZ-bj62H-fE_FBBp9G3ny2A_PQq0G_2l0r1HQ6wVDnvop-Oo8Luwdz6tkV2n.webp?r=0fd",
                        length: 44
                    },
                    {
                        id: 2,
                        title: "היום הראשון של לורליי בצ'ילטון",
                        description: "יומה הראשון של רורי בצ'ילטון אינו מתנהל על מי מנוחות: לבושה של לורליי מעליב את אמילי ואת המנהל ואחר כך היא פוגשת כמה חברים מעצבנים לספסל הלימודים.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY0cVevxVP1wSNzVpup4gR3Y-n4u9kbrkAayj_ZZ_sLpwISHfPboIho7yci9MMXbP0ZGKDK9PMYmHLWGMD0Isf7Oenp4k7D9jFOFP-CXQcunE3t7.webp?r=38b",
                        length: 43
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/south-park.webp',
                tags: ["אבסורדי", "הומור בוטה", "שנון"],
                title: "סאות' פארק",
                description: "קומדיית הסיטקום הסטירית, הלועגת בשמחה לטרנדים, לידוענים ולפוליטיקאים, מציגה את העולם דרך עיניהם של ארבעה ילדים גסי רוח.",
                metaData: {
                    participants: "מאט סטון, טריי פארקר, אייזק הייז, עוד",
                    genres: "קומדיות סיטקום, אנימציה למבוגרים, קומדיות טלוויזיה",
                    tags: "אבסורדי, הומור בוטה, שנון"
                },
                items: [
                    {
                        id: 1,
                        title: 'לכו להתממן',
                        description: "הבנים מקימים חברת סטארט-אפ בתקווה שלא לעבוד עוד לעולם, אבל מסתבכים עם ליגת ה-NFL בגלל השם שבחרו לחברה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZf8Lj2fsw1XFeBuRB9i-4lhUfTko4TyXNc7O-HIGVNupynOuh8dCRAKuRVHzlSbVD55EwVBrhnToU6IFXWKmhvDpz9upuT5ze2zseuPtD4vxqaK.webp?r=5df",
                        length: 22
                    },
                    {
                        id: 2,
                        title: 'אבולה ללא גלוטן',
                        description: "מוות כתוצאה מתזונה לקויה מעורר פאניקה, וסאות'פארק הופכת לעיר נטולת הגלוטן הראשונה באמריקה.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWCQ6aoX1GwcbIAVeZ8hjtlJYY71Q_OXwubMy-1NFVODpn72BXyd18J6JDxF1VF-y_BozX6KU5XpElQFm4J6lztNR4XG8f3gU77Tk46zHCMNVAWG.webp?r=138",
                        length: 22
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-it-crowd.webp',
                tags: ["אבסורדי", "שנון", "בועט"],
                title: "צוות איי.טי.",
                description: "יחד עם מנהלת נטולת כל ידע טכנולוגי, צמד חנונים מפיקים את המיטב מהעבודה בתחום ה-IT בחברה שהבעלים והמנהל החדש שלה הוא אידיוט מושלם.",
                metaData: {
                    participants: "כריס אודאוד, ריצ'רד איואדה, קתרין פרקינסון, עוד",
                    genres: "בריטי, קומדיות סיטקום, קומדיות טלוויזיה",
                    tags: "אבסורדי, שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'ריבה מאתמול',
                        description: "עם קורות חיים מרשימים ומזויפים לגמרי, ועם כמה מושגים טכניים שהמציאה בזמן הראיון, ג'ן זוכה במשרה ב'תעשיות ריינהולם'.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSsPsjznRqCTpnBtZv1pgLy50fUvUp_l489vgl1dOl9GNVbRwE383bRLiraiUr3xS4qiBqhi3fs8xN-qKfRixZBgHcBxEBHxsFsFaZc_fyOO5xaE.webp?r=693",
                        length: 23
                    },
                    {
                        id: 2,
                        title: "ג'ן ההרסנית",
                        description: "דנהולם מאלץ את כל עובדי 'תעשיות ריינהולם' לעבור בדיקת לחץ, ואז מאיים לפטר את כל מי שעדיין לחוץ בסוף היום.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc3xugr9ibbATh1BTsq3KJuU6Q_Iw4LDMgCWlxmB9Xm3diht5tJ-S-G0T-yvBbIAPX4PUe_ObhmGFIvs5DivjHPIaLtitv0YMbhEnZPq0nJZRXCM.webp?r=baa",
                        length: 24
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/startrek.webp',
                tags: ["מד\"ב - חייזרים", "תוכנית מד\"ב", "פעולה"],
                title: "מסע בין כוכבים: הדור הבא",
                description: "עשורים חלפו מאז ההרפתקאות של צוות האנטרפרייז המקורי, ועכשיו קפטן ז'אן-לוק פיקארד מוביל את ספינת האנטרפרייז החדשה למשימות מחקר בעולמות לא מוכרים.",
                metaData: {
                    participants: "פטריק סטיוארט, ג'ונתן פרייקס, לוואר ברטון, עוד",
                    genres: "תוכניות מדע בדיוני, תוכניות פעולה והרפתקאות, דרמות טלוויזיה",
                    tags: "מלהיב"
                },
                items: [
                    {
                        id: 1,
                        title: 'פילוט',
                        description: "ארכי-פושע מסגיר את עצמו לסוכני ה-FBI ומציע להם הצעה שמשאירה אותם בהלם – ללכוד טרוריסט חמקמק. אבל הוא מוכן לדבר רק עם מאפיינת פרופילים ספציפית.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABavFz5FnkwBai3LYqrFZKJ3zIPUWSgO_CrMInLLfJNZBDfVnzWsFsiRzmshWRT21BMF3I7qCWJ31WuSA6aEokELRsyB3rrYvk0nLDNI8YX30CU0_.webp?r=759",
                        length: 45
                    },
                    {
                        id: 2,
                        title: "העצמאי (מס' 145)",
                        description: 'ליז ורד עוקבים אחרי רוצח שמסווה את רציחותיו בתוך אסונות גדולים. מחלקת המשפטים מתקשה להבין את מניעיו של רד.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABawqSM5IgC3grC11AUhrN742iEOKJzV6Zi7loWomC4FjGeN0Cy169X3Mp5yf80Bd8feEHHXhbwTBDgghi34aw6jY1jTbVMumFUZyFSbcbK8zTViP.webp?r=4cb",
                        length: 40
                    },
                ]
            },
            {
                imgSrc: 'assets/thumbnails/the-office.webp',
                tags: ["שנון", "בועט", "סיטקום"],
                title: "המשרד",
                description: 'סדרה קומית מצליחה על מעלליהם של עובדי משרד בחברת הנייר "דאנדר מיפלין", כולל מייקל סקוט, הבוס שחי בסרט.',
                metaData: {
                    participants: "סטיב קארל, ג'ון קראסינסקי, ג'נה פישר, עוד",
                    genres: "קומדיות סיטקום, קומדיות טלוויזיה, תוכניות טלוויזיה אמריקאיות",
                    tags: "שנון, בועט"
                },
                items: [
                    {
                        id: 1,
                        title: 'פיילוט',
                        description: "מייקל סקוט, מנהל קלולס בחברת דאנדר מיפלין, מארח צוות צילום שמגיע לתעד את העבודה במשרד ומגלה שמטה החברה שוקל לסגור את הסניף שבניהולו.",
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV58UXtcbET98UBHugWUGQEyHotdyIXVeF3xubVT_764vAzje_bIZx1ZzMxuTZlH98QbOAU1T124kNZ4ODhuxT90gwjvvK1t0JPtfWNaeK4T3IIv.webp?r=9b7",
                        length: 23
                    },
                    {
                        id: 2,
                        title: 'יום הסובלנות',
                        description: 'העובדים משתתפים בסדנת סובלנות בעקבות תלונות על בדיחה פוגענית שאחד מהם סיפר.',
                        thumbnail: "https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRBu6RCWTMMYmneWn_lkIiYhwpq0ugM2EQW7_jhRIdjy0f8m8ycvRXkm3jS0JyKMvE9l-7HL0MaJ5MmAS6PGB3c-Hl3UY1liPGC9y7dye_3hR8uF.webp?r=9dc",
                        length: 21
                    },
                ]
            },
        ]
    },
]
