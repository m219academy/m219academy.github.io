export const paths = [
  {
    "title": "Make Foundations: Dein Einstieg in die Automatisierung",
    "icon": "01",
    "summary": "Make kennenlernen, Konto einrichten, Oberfläche erkunden und Trigger verstehen.",
    "lessons": [
      [
        "Was ist Make.com?",
        "Erfahre, wie Automatisierung funktioniert und was hinter Make steckt.",
        "Wiederkehrende Aufgaben können durch Regeln automatisch erledigt werden.",
        "Nenne einen wiederkehrenden Schritt, den du gerne automatisieren würdest.",
        "Wozu dient Make?",
        [
          "Zum Verbinden und Automatisieren von Anwendungen",
          "Nur zum Zeichnen",
          "Nur zum Spielen"
        ],
        0,
        "<h3>Was bedeutet Automatisierung?</h3><p>Automatisierung bedeutet, dass ein System wiederkehrende Arbeitsschritte nach festgelegten Regeln übernimmt. Du musst dieselben Informationen nicht ständig von Hand übertragen.</p><div class='concept-grid'><div class='notice'><strong>Ohne Automatisierung</strong><p>E-Mail lesen → Daten kopieren → Tabelle öffnen → Nachricht verschicken.</p></div><div class='notice'><strong>Mit Automatisierung</strong><p>Neuer Eintrag → Make verarbeitet die Informationen → Benachrichtigung wird versendet.</p></div></div><h3>Was ist Make.com?</h3><p>Make ist eine visuelle Plattform, mit der du Anwendungen und Onlinedienste zu automatisierten Abläufen verbinden kannst. Viele grundlegende Abläufe lassen sich ohne eigene Programmierung aufbauen.</p><h3>Ein kurzer Blick zurück</h3><p>Die Plattform wurde ursprünglich als <strong>Integromat</strong> bekannt und im Februar 2022 unter dem Namen <strong>Make</strong> neu eingeführt. Entwickelt wurde sie vom Team hinter Integromat; Make ist heute ein Produkt des Unternehmens Celonis bzw. Make als eigenständige Marke.</p><h3>Wofür wird Make verwendet?</h3><p>Beispiele sind die Übertragung von Formulardaten in Tabellen, Benachrichtigungen bei neuen Anfragen und die Synchronisierung von Informationen zwischen Apps.</p><p class='muted'>Weiterführend: <a href='https://www.make.com/en' target='_blank' rel='noopener'>Offizielle Make-Webseite</a>.</p>"
      ],
      [
        "Registrierung und Anmeldung",
        "Erstelle dein Make-Konto und melde dich an.",
        "Die Anmeldung bietet unter anderem E-Mail und weitere verfügbare Anmeldeoptionen.",
        "Öffne dein eigenes Make Dashboard.",
        "Wo registrierst du dich?",
        [
          "Über Sign up",
          "Nur über Scenarios",
          "Über eine Gmail-Nachricht"
        ],
        0,
        "<h3>Dein kostenloses Konto</h3><p>Öffne <a href='https://www.make.com/' target='_blank' rel='noopener'>make.com</a> und wähle die Anmeldung. Falls du noch kein Konto hast, klicke auf <strong>Sign up</strong>. Folge den Schritten und bestätige deine E-Mail-Adresse, wenn Make dich darum bittet.</p><figure class='lesson-figure'><img src='./assets/images/login.png' alt='Make-Anmeldeseite mit E-Mail, Passwort, Sign in und Sign up' loading='lazy'><figcaption>Hier findest du Anmeldung, Registrierung und die Passwortwiederherstellung.</figcaption></figure><ol><li>Klicke unten auf <strong>Sign up</strong>, um ein Konto zu erstellen.</li><li>Melde dich mit deiner gewählten Methode an.</li><li>Folge bei Bedarf der Ersteinrichtung deiner Organisation.</li><li>Öffne das Dashboard. Bereits registrierte Personen verwenden <strong>Sign in</strong>.</li></ol><div class='task'><strong>Praxis-Check</strong><p>Öffne Make und prüfe, ob du die Startseite deiner Organisation sehen kannst. Verwende für die Übungen möglichst ein eigenes Testkonto.</p></div>"
      ],
      [
        "Die Benutzeroberfläche entdecken",
        "Lerne Dashboard, Scenarios, Templates und den Scenario Builder kennen.",
        "Die farbige linke Leiste führt zu Scenarios und Templates.",
        "Klicke im Rundgang auf alle Bereiche und suche sie im echten Make Dashboard.",
        "Wo findest du bestehende Workflows?",
        [
          "Scenarios",
          "Payments",
          "Profilbild"
        ],
        0,
        "<h3>Dein Rundgang durch Make</h3><p>Nach der Anmeldung landest du bei deiner Organisation. Über die farbige Seitenleiste wechselst du zwischen den wichtigsten Bereichen.</p><figure class='lesson-figure'><img src='./assets/images/dashboard.png' alt='Make Dashboard mit Seitenleiste und Create scenario' loading='lazy'><figcaption>Dashboard: Organisation, Scenarios, Templates und die Schaltfläche Create scenario.</figcaption></figure><div class='tour-list'><button type='button' data-tour='dashboard'>1 · Dashboard / Org</button><button type='button' data-tour='scenarios'>2 · Scenarios</button><button type='button' data-tour='templates'>3 · Templates</button><button type='button' data-tour='builder'>4 · Create scenario</button></div><div id='tourInfo' class='notice' aria-live='polite'>Klicke auf eine Station des Rundgangs.</div><h3>Scenarios</h3><figure class='lesson-figure'><img src='./assets/images/scenarios.png' alt='Make Szenarioübersicht und Create your first scenario' loading='lazy'><figcaption>Hier kannst du Szenarien suchen, verwalten oder neu erstellen.</figcaption></figure><h3>Templates</h3><figure class='lesson-figure'><img src='./assets/images/templates.png' alt='Make Public templates mit Beispielen' loading='lazy'><figcaption>Vorlagen zeigen dir typische Abläufe und sparen Zeit.</figcaption></figure>"
      ],
      [
        "Szenarien, Module und Apps",
        "Verstehe den Aufbau eines automatisierten Workflows.",
        "Ein Szenario besteht aus Modulen, die einzelne Aufgaben übernehmen.",
        "Schau dir den Beispiel-Workflow mit Google Sheets und Gmail an.",
        "Was ist ein Modul?",
        [
          "Ein Teil eines Szenarios",
          "Ein Benutzerkonto",
          "Ein Tarif"
        ],
        0,
        "<h3>Was ist ein Szenario?</h3><p>Ein <strong>Szenario</strong> ist der gesamte automatisierte Workflow. Die einzelnen Schritte heissen <strong>Module</strong>. Jedes Modul übernimmt eine Aufgabe in einer App oder verarbeitet Daten.</p><figure class='lesson-figure'><img src='./assets/images/builder.png' alt='Leerer Make Scenario Builder mit Plusbutton' loading='lazy'><figcaption>Im Scenario Builder fügst du Module mit dem grossen Plus hinzu.</figcaption></figure><h3>Ein Beispiel mit zwei Apps</h3><figure class='lesson-figure'><img src='./assets/images/modules.png' alt='Google Sheets Watch New Rows und Gmail Send an email im Make Builder' loading='lazy'><figcaption>Google Sheets überwacht neue Zeilen und Gmail kann eine E-Mail versenden. Die abgebildeten Module müssen für einen echten Ablauf noch korrekt verbunden und konfiguriert werden.</figcaption></figure><p>Das gesamte Beispiel ist ein Szenario. Das Google-Sheets-Modul und das Gmail-Modul sind seine Bausteine. <strong>Connections</strong> erlauben Make den Zugriff auf verbundene Dienste.</p>"
      ],
      [
        "Trigger und Actions verstehen",
        "Erkenne Auslöser und ausführende Schritte in Automatisierungen.",
        "Ein Trigger erkennt einen neuen Eintrag; eine Action kann eine E-Mail senden.",
        "Ordne im Beispiel Trigger und Action zu.",
        "Was ist im Beispiel ein Trigger?",
        [
          "Send an email",
          "Watch New Rows",
          "Account settings"
        ],
        1,
        "<h3>Trigger: Was startet den Ablauf?</h3><p>Ein Trigger ist ein Auslöser, beispielsweise eine neue Zeile in Google Sheets. Je nach App kann Make regelmässig nach neuen Daten suchen (<strong>Polling</strong>) oder auf ein Ereignis reagieren (<strong>Instant Trigger</strong>).</p><h3>Action: Was passiert anschliessend?</h3><p>Eine Action ist eine auszuführende Aufgabe, etwa eine E-Mail senden, einen Datensatz erstellen oder einen Eintrag aktualisieren.</p><figure class='lesson-figure'><img src='./assets/images/modules.png' alt='Beispielmodule Google Sheets und Gmail' loading='lazy'><figcaption>Links: Watch New Rows als Trigger. Rechts: Send an email als Aktion.</figcaption></figure><div class='task'><strong>Ordne zu</strong><p>Was ist der Trigger und was ist die Action im Beispiel «Neue Formularantwort → Bestätigungs-E-Mail»?</p><p>Trigger: neue Formularantwort. Action: Bestätigungs-E-Mail versenden.</p></div>"
      ],
      [
        "Abschlussquiz: Make Explorer",
        "Prüfe dein Wissen in zehn Fragen und sichere dir dein erstes Abzeichen.",
        "Du bestehst den Lernpfad mit mindestens acht richtigen Antworten.",
        "Beantworte alle 10 Fragen und prüfe dein Ergebnis.",
        "Wofür ist der Scenario Builder da?",
        [
          "Um Module visuell zu verbinden",
          "Um Profile zu löschen",
          "Um Rechnungen zu bezahlen"
        ],
        0,
        "<h3>Dein Abschlussquiz</h3><p>Du hast Make, die Oberfläche, Szenarien, Module und Trigger kennengelernt. Beantworte jetzt <strong>10 Fragen</strong>. Mit mindestens <strong>8 richtigen Antworten</strong> ist Lernpfad 1 abgeschlossen.</p><p>Das Quiz kannst du wiederholen. Die Abschluss-XP werden nur einmal vergeben.</p>"
      ]
    ]
  },
  {
    "title": "Dein erster Workflow: Von Google Sheets zur E-Mail",
    "icon": "02",
    "summary": "Baue Schritt für Schritt eine Automatisierung, die neue Tabellenzeilen erkennt und eine persönliche Bestätigung versendet.",
    "lessons": [
      [
        "Eine Automatisierung planen",
        "Plane einen Ablauf: Neue Kundenanfrage in einer Tabelle führt zu einer Bestätigung per E-Mail.",
        "Google Sheets erkennt neue Zeilen, Gmail versendet eine persönliche Bestätigung.",
        "Zeichne den Ablauf Google Sheets → Gmail mit zwei Kästchen auf.",
        "Was startet das Szenario?",
        [
          "Ein neuer Tabellen-Eintrag",
          "Das Profilbild",
          "Ein Kalenderdesign"
        ],
        0,
        "<h3>Vom Problem zum Workflow</h3><p>Stell dir vor, neue Kundenanfragen landen in einer Tabelle. Jede Person soll eine Eingangsbestätigung erhalten. Ohne Automatisierung musst du die Adresse suchen, eine E-Mail formulieren und diese einzeln versenden. Bei vielen Anfragen ist das zeitaufwendig und fehleranfällig.</p><p>Wir bauen einen <strong>zweistufigen Workflow</strong>: Google Sheets überwacht neue Tabellenzeilen und Gmail verschickt einen passenden Text. Der erste Schritt ist ein <strong>Trigger</strong>, der zweite eine <strong>Action</strong>.</p><div class=\"notice\"><strong>Unser Ziel</strong><p>Wenn eine neue Zeile in «M219 Academy – Kundenanfragen» erscheint, soll der Empfänger automatisch eine Nachricht mit Namen und Anfrage erhalten.</p></div><h3>Welche Daten brauchen wir?</h3><p>Wir verwenden drei Spalten: <strong>Name</strong>, <strong>E-Mail</strong> und <strong>Anfrage</strong>. Name und Anfrage kommen später direkt in die Nachricht, E-Mail bestimmt den Empfänger.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-builder.png\" loading=\"lazy\" alt=\"Der leere Scenario Builder: Hier startet deine erste Automatisierung.\"><figcaption>Der leere Scenario Builder: Hier startet deine erste Automatisierung.</figcaption></figure><h3>Bevor du beginnst</h3><p>Du benötigst ein Make-Konto, ein Google-Konto mit Google Sheets und die Möglichkeit, Gmail zu verbinden. Verwende für den Test deine eigene Adresse. Trage niemals zufällige oder fremde E-Mail-Adressen als Testempfänger ein.</p>"
      ],
      [
        "Google Sheets vorbereiten",
        "Lege eine Tabelle mit den Spalten Name, E-Mail und Anfrage an.",
        "Die Kopfzeile muss die Feldnamen enthalten, damit Make die Spalten erkennt.",
        "Erstelle in Google Sheets eine Datei «M219 Academy – Kundenanfragen» und die drei Spalten.",
        "Welche Zeile enthält die Überschriften?",
        [
          "Zeile 1",
          "Zeile 10",
          "Die letzte Zeile"
        ],
        0,
        "<h3>Die Datenquelle erstellen</h3><p>Öffne Google Sheets und erstelle eine neue Tabelle. Benenne sie <strong>M219 Academy – Kundenanfragen</strong>. Trage in Zeile 1 die Überschriften <strong>Name</strong>, <strong>E-Mail</strong>, <strong>Anfrage</strong> in die Spalten A, B und C ein.</p><p>Eine Kopfzeile ist wichtig: Sie hilft Make, Daten in späteren Modulen als benannte Felder anzubieten, statt dich nur mit anonymen Spalten arbeiten zu lassen.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-sheet.png\" loading=\"lazy\" alt=\"Google Sheets mit den drei benötigten Spalten. Die Beispieladresse wurde für den öffentlichen Kurs verdeckt.\"><figcaption>Google Sheets mit den drei benötigten Spalten. Die Beispieladresse wurde für den öffentlichen Kurs verdeckt.</figcaption></figure><h3>Worauf solltest du achten?</h3><p>Die Blattbezeichnung kann beispielsweise «Tabellenblatt1» lauten. Achte auf Schreibweise und darauf, dass die drei Überschriften tatsächlich in A1 bis C1 liegen. Die Datei wird automatisch in Google Drive gespeichert.</p><div class=\"task\"><strong>Praxis-Tipp</strong><p>Für den ersten Test darfst du eine Beispielzeile vorbereiten. Verwende dabei eine E-Mail-Adresse, die dir gehört, damit niemand ungewollt angeschrieben wird.</p></div>"
      ],
      [
        "Trigger einrichten: Watch New Rows",
        "Verbinde Make mit Google Sheets und wähle die richtige Datei.",
        "Watch New Rows überprüft neue Tabellenzeilen.",
        "Konfiguriere Google Sheets → Watch New Rows und speichere das Modul.",
        "Welches Modul überwacht neue Zeilen?",
        [
          "Add a Row",
          "Watch New Rows",
          "Send an Email"
        ],
        1,
        "<h3>Das erste Modul hinzufügen</h3><p>Öffne dein Szenario und klicke auf das grosse <strong>Plus</strong>. Suche nach <strong>Google Sheets</strong> und wähle <strong>Watch New Rows</strong>. Du hast nun den Trigger hinzugefügt.</p><h3>Verbindung zu Google herstellen</h3><p>Klicke auf <strong>Create a connection</strong>, melde dich mit deinem Google-Konto an und erteile Make die angefragten Zugriffsrechte. Prüfe die Berechtigungen, bevor du bestätigst.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-connection.png\" loading=\"lazy\" alt=\"Im Trigger richtest du eine Google-Sheets-Verbindung ein.\"><figcaption>Im Trigger richtest du eine Google-Sheets-Verbindung ein.</figcaption></figure><h3>Die richtigen Einstellungen</h3><ol><li><strong>Search Method:</strong> Search by path</li><li><strong>Drive:</strong> My Drive</li><li><strong>Spreadsheet ID:</strong> M219 Academy – Kundenanfragen</li><li><strong>Sheet Name:</strong> Tabellenblatt1 (oder dein tatsächlicher Blattname)</li><li><strong>Table contains headers:</strong> Yes</li><li><strong>Row with headers:</strong> A1:C1</li><li><strong>Limit:</strong> 2 für unseren Test</li></ol><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-trigger.png\" loading=\"lazy\" alt=\"Beispielkonfiguration mit Tabellenblatt1, Kopfzeile A1:C1 und Limit 2.\"><figcaption>Beispielkonfiguration mit Tabellenblatt1, Kopfzeile A1:C1 und Limit 2.</figcaption></figure><p><strong>Limit</strong> bedeutet: Wie viele neue Zeilen Make bei einer Ausführung höchstens verarbeitet. Es bestimmt nicht die Anzahl aller Zeilen in deiner Tabelle.</p><div class=\"notice\"><strong>Wichtig</strong><p>«Watch New Rows» ist ein Polling-Trigger. Die Ausführung kann später zeitgesteuert stattfinden. Das ist nicht dasselbe wie eine sofortige Benachrichtigung bei jeder Änderung.</p></div>"
      ],
      [
        "Gmail und Mapping konfigurieren",
        "Lass Gmail Daten aus Google Sheets als personalisierte E-Mail versenden.",
        "Mapping überträgt dynamische Werte aus einem Modul in das nächste.",
        "Erstelle Gmail → Send an email und mappe E-Mail (B), Name (A) und Anfrage (C).",
        "Welches Feld gehört in «To»?",
        [
          "Name (A)",
          "E-Mail (B)",
          "Anfrage (C)"
        ],
        1,
        "<h3>Ein zweites Modul verbinden</h3><p>Füge rechts neben Google Sheets ein weiteres Modul hinzu. Suche <strong>Gmail</strong> und wähle <strong>Send an email</strong>. Verbinde dein Gmail-Konto mit Make.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-gmail.png\" loading=\"lazy\" alt=\"Gmail-Modul zur Einrichtung des automatischen E-Mail-Versands.\"><figcaption>Gmail-Modul zur Einrichtung des automatischen E-Mail-Versands.</figcaption></figure><h3>Was bedeutet Mapping?</h3><p>Ein Text wie «Hallo Max» wäre statisch und würde bei jeder Anfrage gleich bleiben. Beim <strong>Mapping</strong> übergibst du echte Werte aus der jeweiligen Tabellenzeile. Dadurch kann die Nachricht für jede Person anders aussehen.</p><ol><li>Unter <strong>To</strong> füge einen Empfänger hinzu und wähle aus Google Sheets das Feld <strong>E-Mail (B)</strong>.</li><li>Bei <strong>Subject</strong> verwende «Bestätigung deiner Anfrage | M219 Academy».</li><li>Bei <strong>Body type</strong> wähle <strong>Raw HTML</strong>.</li><li>Schreibe in <strong>Content</strong> eine kurze Eingangsbestätigung und füge die Variablen <strong>Name (A)</strong> und <strong>Anfrage (C)</strong> ein.</li></ol><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-mapping.png\" loading=\"lazy\" alt=\"Grüne Platzhalter sind dynamische Werte aus Google Sheets.\"><figcaption>Grüne Platzhalter sind dynamische Werte aus Google Sheets.</figcaption></figure><div class=\"notice\"><strong>Beispiel für den E-Mail-Text</strong><p>Hallo [Name], vielen Dank für deine Anfrage. Wir haben folgende Nachricht erhalten: [Anfrage]. Freundliche Grüsse, M219 Academy.</p><p>Ersetze die eckigen Platzhalter im Make-Editor durch die auswählbaren grünen Variablen. Schreibe sie nicht bloss als normalen Text!</p></div>"
      ],
      [
        "Run once, Startpunkt und Scheduling",
        "Teste den Workflow und verstehe den Unterschied zwischen einmaliger und automatischer Ausführung.",
        "Run once führt einen manuellen Test aus; Active und ein Intervall konfigurieren den künftigen Betrieb.",
        "Teste mit deiner eigenen E-Mail-Adresse und prüfe den Posteingang.",
        "Was bedeutet «Run once»?",
        [
          "Ein einmaliger manueller Test",
          "Dauerhaft aktivieren",
          "Alle E-Mails löschen"
        ],
        0,
        "<h3>Der erste Test</h3><p>Speichere beide Module und das Szenario. Lege in Google Sheets eine neue Zeile mit deinem Namen, deiner eigenen E-Mail-Adresse und einer Testanfrage an. Klicke in Make auf <strong>Run once</strong>.</p><h3>Choose where to start</h3><p>Bei der ersten Ausführung fragt Make, welche vorhandenen Zeilen berücksichtigt werden sollen. <strong>All</strong> kann bereits bestehende Zeilen verarbeiten. Verwende diese Einstellung nur, wenn alle enthaltenen Empfänger für den Test geeignet sind. Andernfalls lege den Startpunkt gezielt fest.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-start.png\" loading=\"lazy\" alt=\"Make fragt nach dem Startpunkt der Verarbeitung.\"><figcaption>Make fragt nach dem Startpunkt der Verarbeitung.</figcaption></figure><h3>Erfolg kontrollieren</h3><p>Nach einem erfolgreichen Test zeigen die Module eine positive Ausführung an. Öffne anschliessend das Zielpostfach und prüfe, ob Name und Anfrage richtig übernommen wurden.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-email.png\" loading=\"lazy\" alt=\"Ergebnis unseres manuellen Tests: Eine E-Mail wurde erfolgreich zugestellt. Persönliche Kontaktdaten sind verdeckt.\"><figcaption>Ergebnis unseres manuellen Tests: Eine E-Mail wurde erfolgreich zugestellt. Persönliche Kontaktdaten sind verdeckt.</figcaption></figure><h3>Automatisch ausführen</h3><p>Speichere das Szenario. Oben rechts lässt sich beispielsweise <strong>Every 15 minutes</strong> einstellen und der Schalter auf <strong>Active</strong> setzen. Danach kann Make den Trigger nach Zeitplan ausführen.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp2-active.png\" loading=\"lazy\" alt=\"Aktiviertes Szenario mit einem Intervall von 15 Minuten.\"><figcaption>Aktiviertes Szenario mit einem Intervall von 15 Minuten.</figcaption></figure><div class=\"notice\"><strong>Was wurde wirklich geprüft?</strong><p>Der E-Mail-Versand wurde mit «Run once» erfolgreich getestet. Anschliessend wurde die geplante Ausführung aktiviert. Der automatische Versand nach dem 15-Minuten-Intervall wurde bei diesem Test nicht gesondert nachgewiesen.</p></div><p>Nach deinem Test kannst du das Szenario wieder deaktivieren, damit keine weiteren E-Mails unbeabsichtigt gesendet werden.</p>"
      ],
      [
        "Abschlussquiz: Workflow Starter",
        "Überprüfe dein Wissen und schliesse deine erste Automatisierung ab.",
        "Du bestehst mit 8 von 10 richtigen Antworten.",
        "Prüfe, ob du einen eigenen Test per Run once durchführen und das Ergebnis erklären kannst.",
        "Welche Aktion sendet die Nachricht?",
        [
          "Google Sheets Watch New Rows",
          "Gmail Send an email",
          "Make Templates"
        ],
        1,
        "<h3>Dein Praxisabschluss</h3><p>Du hast ein eigenes Szenario geplant, eine Tabelle vorbereitet, Google Sheets und Gmail verbunden, Felder gemappt und den Versand getestet. Jetzt kannst du zeigen, dass du die einzelnen Schritte wirklich verstanden hast.</p><p>Beantworte die zehn Fragen. Du brauchst mindestens <strong>8 richtige Antworten</strong>, um LP2 abzuschliessen und den nächsten Lernpfad freizuschalten. XP werden pro bestandener Aufgabe nur einmal gutgeschrieben.</p><div class=\"task\"><strong>Praktischer Nachweis</strong><p>Zeige dein Szenario mit den zwei verbundenen Modulen und erkläre, wie die Variablen aus der Tabelle in die E-Mail gelangen. Der Screenshot aus Make dient als Beleg für deinen eigenen Test.</p></div>"
      ]
    ]
  },
{
  "title": "Master Your Data: Mapping & Textfunktionen",
  "icon": "03",
  "summary": "Lerne Bundles kennen, mappe Werte und gestalte mit upper() und trim() dynamische E-Mails.",
  "lessons": [
    [
      "Daten und Bundles verstehen",
      "Entdecke, welche Daten ein Make-Modul nach einer Ausführung liefert.",
      "Aus einer Tabellenzeile wird ein Bundle mit Name, E-Mail und Anfrage.",
      "Öffne in Make nach Run once die Ausführungsdetails von Google Sheets und finde die drei Spaltenwerte.",
      "Was ist ein Bundle in Make?",
      [
        "Eine Sammlung von ausgegebenen Werten",
        "Ein neues Konto",
        "Ein Google-Drive-Ordner"
      ],
      0,
      "<h3>Was passiert mit deinen Tabellendaten?</h3><p>Beim Ausführen von <strong>Google Sheets → Watch New Rows</strong> liest Make neue Zeilen ein. Die erkannten Werte werden als strukturierte Daten an das nächste Modul weitergegeben. Eine einzelne ausgegebene Dateneinheit nennt Make <strong>Bundle</strong>.</p><p>Unser Test hat gezeigt: Ein Bundle kann beispielsweise <strong>Row number: 3</strong>, <strong>Name (A): Test Person 2</strong>, <strong>E-Mail (B)</strong> und <strong>Anfrage (C): Automatischer Test M219</strong> enthalten. Diese Werte sind keine fixen Texte für jede Ausführung. Sie hängen vom jeweiligen Tabelleninhalt ab.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp3-panel.png\" alt=\"Mapping-Panel mit den Daten aus dem Google-Sheets-Bundle\" loading=\"lazy\"><figcaption>Ausgabewerte des Google-Sheets-Moduls im Mapping-Panel.</figcaption></figure><h3>Warum ist das wichtig?</h3><p>Jedes weitere Modul kann passende Werte aus einem vorherigen Schritt verwenden. So muss man den Namen oder die E-Mail-Adresse nicht für jede Kundenanfrage von Hand eintragen.</p><div class=\"notice\"><strong>Merke</strong><p>Das Modul führt eine Aufgabe aus. Das Bundle enthält die Daten, die bei dieser Ausführung zurückkommen. Eine Ausführung kann je nach Trigger auch mehrere Bundles verarbeiten.</p></div>"
    ],
    [
      "Mapping gezielt einsetzen",
      "Ordne Daten aus Google Sheets den richtigen Feldern in Gmail zu.",
      "Name (A) wird zur Anrede, E-Mail (B) zum Empfänger, Anfrage (C) zur Nachricht.",
      "Öffne Gmail → Send an email und kontrolliere die drei grünen Variablen.",
      "Welche Spalte gehört in das Empfängerfeld «To»?",
      [
        "Anfrage (C)",
        "E-Mail (B)",
        "Name (A)"
      ],
      1,
      "<h3>Feste Texte oder dynamische Werte?</h3><p>In einem Gmail-Modul kannst du einen festen Text wie «Vielen Dank für deine Anfrage» schreiben. Du kannst aber auch einen Wert aus Google Sheets einfügen. Das heisst <strong>Mapping</strong>. Im Editor erscheinen die gemappten Werte als farbige Variablen.</p><p>Im Feld <strong>To</strong> gehört <strong>E-Mail (B)</strong>. Im Begrüssungstext setzt du <strong>Name (A)</strong> ein. Den Inhalt der Anfrage übernimmst du aus <strong>Anfrage (C)</strong>. Bei einer neuen Tabellenzeile verwendet Make automatisch die Daten dieser Zeile.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp3-subject.png\" alt=\"Gmail-Subject mit dynamischer Variable Name (A)\" loading=\"lazy\"><figcaption>Die grüne Variable Name (A) stammt aus Google Sheets.</figcaption></figure><h3>Ein häufiger Fehler</h3><p>Wenn du statt einer Variable einen Namen wie «Test Person 2» direkt eintippst, steht derselbe Name in jeder verschickten Nachricht. Achte deshalb darauf, echte Mapping-Tokens zu verwenden.</p><div class=\"task\"><strong>Praxis-Check</strong><p>Zeige im Szenario auf die Variablen für Name, E-Mail und Anfrage. Erkläre laut, warum genau diese Zuordnung sinnvoll ist.</p></div>"
    ],
    [
      "Textfunktionen: upper und trim",
      "Formatiere eingehende Texte, bevor du sie weiterverwendest.",
      "upper(max mustermann) ergibt MAX MUSTERMANN. trim entfernt überflüssige Leerzeichen am Anfang und Ende.",
      "Ersetze im Subject die einfache Namensvariable durch upper(Name (A)).",
      "Was ergibt upper(\"max mustermann\")?",
      [
        "Max Mustermann",
        "MAX MUSTERMANN",
        "max mustermann"
      ],
      1,
      "<h3>Texte automatisch bearbeiten</h3><p>Mit Funktionen kann Make Werte vor dem Weitergeben verändern. Eine Textfunktion nimmt einen Eingabewert entgegen und liefert einen bearbeiteten Wert zurück. Die ursprüngliche Zelle in Google Sheets wird dadurch <strong>nicht</strong> geändert.</p><h3>upper()</h3><p>Die Funktion <strong>upper()</strong> verwandelt Buchstaben in Grossbuchstaben. Öffne das Mapping-Menü, wähle den Bereich mit dem Buchstaben <strong>A</strong> und füge <strong>upper</strong> hinzu. Setze die grüne Variable <strong>Name (A)</strong> zwischen die Klammern.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp3-functions.png\" alt=\"Textfunktionen in Make mit upper und trim\" loading=\"lazy\"><figcaption>Im Menü Textfunktionen findest du upper und trim.</figcaption></figure><figure class=\"lesson-figure\"><img src=\"./assets/images/lp3-upper.png\" alt=\"Make Gmail Subject mit upper und dynamischer Namensvariable\" loading=\"lazy\"><figcaption>upper(Name (A)) im Betreff: Der Name wird erst bei der Ausführung umgewandelt.</figcaption></figure><h3>trim()</h3><p>Mit <strong>trim()</strong> entfernst du überflüssige Leerzeichen am Anfang und Ende eines Texts. Beispiel: Aus «  Max  » wird «Max». Die Funktion eignet sich für Formulareingaben, die Benutzer versehentlich mit Leerzeichen absenden.</p><div class=\"notice\"><strong>Wichtig</strong><p>upper() und trim() betreffen nur das Feld, in dem du sie verwendest. Andere gemappte Felder bleiben unverändert.</p></div>"
    ],
    [
      "Dynamische E-Mails testen",
      "Prüfe, ob Make die richtigen Daten in Betreff und Nachricht ausgibt.",
      "Der Testeintrag max mustermann wurde im Betreff zu MAX MUSTERMANN, im E-Mail-Text blieb er unverändert.",
      "Ergänze einen Testeintrag mit deiner eigenen E-Mail-Adresse, starte Run once und kontrolliere den Betreff.",
      "Warum bleibt der Name im E-Mail-Text klein geschrieben?",
      [
        "Weil upper() nur im Subject verwendet wird",
        "Weil Gmail keine Grossbuchstaben kann",
        "Weil Google Sheets alles rückgängig macht"
      ],
      0,
      "<h3>Vom Tabellenwert zum fertigen Betreff</h3><p>Für unseren Test stand in Google Sheets der Name <strong>max mustermann</strong> und als Anfrage <strong>Mapping test</strong>. Im Gmail-Modul haben wir den Betreff aus festen Textteilen und <strong>upper(Name (A))</strong> zusammengesetzt.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp3-sheet.png\" alt=\"Google Sheet mit Testzeile max mustermann und Mapping test\" loading=\"lazy\"><figcaption>Die Testdaten in Google Sheets: ein neuer Name und eine neue Anfrage.</figcaption></figure><h3>Ausführung kontrollieren</h3><ol><li>Speichere das Gmail-Modul und das Szenario.</li><li>Füge einen neuen Testeintrag mit einer E-Mail-Adresse ein, die du selbst kontrollierst.</li><li>Starte <strong>Run once</strong>.</li><li>Prüfe die Ausführung beider Module und die empfangene Nachricht.</li><li>Vergleiche den Namen im Betreff mit dem Namen im Nachrichtentext.</li></ol><figure class=\"lesson-figure\"><img src=\"./assets/images/lp3-result.png\" alt=\"Erhaltene E-Mail mit MAX MUSTERMANN im Betreff und max mustermann im Text\" loading=\"lazy\"><figcaption>Erfolgreicher Praxistest: upper() verändert den Betreff, nicht den Nachrichtentext.</figcaption></figure><h3>Was beweist dieser Test?</h3><p>Wir haben einen <strong>manuellen Test mit Run once</strong> erfolgreich durchgeführt. Der Betreff enthielt den umgewandelten Namen, und die Nachricht wurde zugestellt. Das ist kein Nachweis, dass der zeitgesteuerte Ablauf bereits nach 15 Minuten automatisch ausgeführt wurde.</p><div class=\"task\"><strong>Selbstkontrolle</strong><p>Kannst du sagen, welches Feld dynamisch ist, welcher Ausdruck den Wert bearbeitet und wie du das Ergebnis nachprüfst?</p></div>"
    ],
    [
      "Abschlussquiz: Data Explorer",
      "Prüfe Bundles, Mapping und Textfunktionen.",
      "Zehn Fragen. Ab acht richtigen Antworten gilt LP3 als abgeschlossen.",
      "Bestehe den Test, um LP4 freizuschalten.",
      "Was macht trim()?",
      [
        "Es entfernt überflüssige Rand-Leerzeichen",
        "Es macht den Text fett",
        "Es sendet eine E-Mail"
      ],
      0,
      "<h3>Wissenscheck: Master Your Data</h3><p>Du weisst nun, was ein Bundle enthält, wie Mapping funktioniert und wie Textfunktionen dynamische Inhalte verändern. Löse die <strong>10 Fragen</strong>, um dein Wissen zu überprüfen.</p><p>Mit <strong>mindestens 8 richtigen Antworten</strong> bestehst du. Die verdienten Punkte werden nur einmal gutgeschrieben. Danach wird der nächste Lernpfad freigeschaltet, sobald er verfügbar ist.</p>"
    ]
  ]
},
{
  "title": "Smart Workflow Logic: Filter & Router",
  "icon": "04",
  "summary": "Steuere deinen Datenfluss mit Bedingungen, zwei Gmail-Routen und einer Fallback-Regel.",
  "lessons": [
    [
      "Filter verstehen",
      "Lerne, wie ein Filter entscheidet, ob Daten einen Weg weitergehen dürfen.",
      "Eine Reklamation benötigt eine andere Rückmeldung als eine normale Anfrage.",
      "Öffne in Make die Verbindung zwischen zwei Modulen und suche «Set up a filter».",
      "Was bewirkt ein Filter?",
      [
        "Er prüft Bedingungen vor der Weitergabe",
        "Er fügt immer ein neues Modul hinzu",
        "Er meldet den Benutzer ab"
      ],
      0,
      "<h3>Warum brauchen wir Filter?</h3><p>In unserem bisherigen Szenario hat Make für jede neue Tabellenzeile dieselbe Bestätigung versendet. In der Praxis müssen bestimmte Anfragen aber unterschiedlich behandelt werden. Ein <strong>Filter</strong> entscheidet anhand von Daten, ob ein Datensatz auf einer Verbindung weitergegeben wird.</p><p>Beispiel: Eine Anfrage mit dem Wort <strong>Reklamation</strong> soll eine andere E-Mail auslösen als eine gewöhnliche Produktanfrage.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-filter-menu.png\" alt=\"Make-Screenshot: Über die Verbindung zwischen zwei Modulen gelangst du zu «Set up filter» und «Add router».\" loading=\"lazy\"><figcaption>Über die Verbindung zwischen zwei Modulen gelangst du zu «Set up filter» und «Add router».</figcaption></figure><h3>So funktioniert eine Bedingung</h3><p>Ein Filter vergleicht einen Wert, einen Operator und einen Vergleichstext. Bei <strong>Anfrage (C)</strong> + <strong>Contains</strong> + <strong>Reklamation</strong> wird nur ein Datensatz durchgelassen, dessen Anfrage diesen Ausdruck enthält. Ein nicht passender Datensatz wird auf diesem Weg nicht weiterverarbeitet.</p><div class=\"notice\"><strong>Merke</strong><p>Ein Filter verändert die Daten nicht. Er kontrolliert, ob der nächste Schritt ausgeführt werden soll.</p></div>"
    ],
    [
      "Bedingungen und Operatoren",
      "Verstehe Contains, Equal to und die Verknüpfungen AND/OR.",
      "Contains (case insensitive) erkennt Reklamation, reklamation und REKLAMATION.",
      "Vergleiche die Beispiele «Reklamation wegen Lieferung» und «Produktinformation».",
      "Welche Einstellung erkennt auch «reklamation»?",
      [
        "Equal to mit Grossschreibung",
        "Contains (case insensitive)",
        "Text ist leer"
      ],
      1,
      "<h3>Operatoren richtig wählen</h3><p>Mit <strong>Equal to</strong> prüfst du, ob ein Feld dem Vergleichswert entspricht. Mit <strong>Contains</strong> genügt es, dass der gesuchte Ausdruck innerhalb eines längeren Texts vorkommt. Die Option <strong>case insensitive</strong> ignoriert dabei Gross- und Kleinschreibung.</p><p>Für unsere Kundenanfragen ist «Contains (case insensitive)» sinnvoll. Auch die Anfrage «Reklamation wegen beschädigter Ware» soll erkannt werden, obwohl sie nicht exakt «Reklamation» lautet.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-filter-reklamation.png\" alt=\"Make-Screenshot: Der Reklamationsfilter mit Anfrage (C), Contains (case insensitive) und Reklamation.\" loading=\"lazy\"><figcaption>Der Reklamationsfilter mit Anfrage (C), Contains (case insensitive) und Reklamation.</figcaption></figure><h3>AND und OR</h3><p>Bei <strong>AND</strong> müssen alle Bedingungen zutreffen, etwa «Anfrage enthält Reklamation» UND «E-Mail ist vorhanden». Bei <strong>OR</strong> reicht eine der Bedingungen, zum Beispiel «Anfrage enthält Reklamation» ODER «Anfrage enthält Beschwerde».</p><div class=\"task\"><strong>Gedankenübung</strong><p>Welche Kombination würdest du wählen, wenn sowohl Reklamationen als auch Beschwerden in denselben Bearbeitungspfad sollen?</p><p><strong>Lösung:</strong> OR.</p></div>"
    ],
    [
      "Router und Fallback verstehen",
      "Teile einen Datenfluss in mehrere Wege und lerne die Fallback-Route kennen.",
      "Router: Reklamationen unten, gewöhnliche Anfragen oben.",
      "Öffne das Kontextmenü einer Verbindung und verwende «Add router».",
      "Was ist eine Fallback-Route?",
      [
        "Der Weg für Daten, die auf keine andere Route passen",
        "Eine Kopie des gesamten Szenarios",
        "Der erste Google-Sheets-Eintrag"
      ],
      0,
      "<h3>Ein Workflow, mehrere Wege</h3><p>Ein <strong>Router</strong> erstellt mehrere Routen, auf denen die gleichen eingehenden Daten unterschiedlich verarbeitet werden können. Im Beispiel steht nach Google Sheets ein Router. Zwei Wege führen zu zwei unterschiedlichen Gmail-Modulen.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-router.png\" alt=\"Make-Screenshot: Der Router wurde zwischen Google Sheets und Gmail eingefügt.\" loading=\"lazy\"><figcaption>Der Router wurde zwischen Google Sheets und Gmail eingefügt.</figcaption></figure><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-second-route.png\" alt=\"Make-Screenshot: Der zweite Weg führt zu einem weiteren Gmail-Modul.\" loading=\"lazy\"><figcaption>Der zweite Weg führt zu einem weiteren Gmail-Modul.</figcaption></figure><h3>Fallback statt doppelter Nachricht</h3><p>Unsere obere Route ist eine <strong>Fallback-Route</strong> mit der Bezeichnung «Normale Anfrage». Sie wird für Daten genutzt, die nicht auf die anderen Routen passen. Auf der unteren Route prüft ein Filter auf «Reklamation».</p><p>So können wir eine Reklamation anders beantworten als eine normale Anfrage. Wichtig ist, dass du die Fallback-Einstellung bewusst verwendest und nach dem Speichern beide Wege testest.</p><div class=\"notice\"><strong>Praxis-Tipp</strong><p>Ohne passende Bedingungen könnten mehrere Routen denselben Datensatz verarbeiten und mehrere E-Mails versenden. Prüfe deshalb die Regeln vor «Run once».</p></div>"
    ],
    [
      "Praxis: Reklamationen automatisch erkennen",
      "Baue den Router mit zwei Gmail-Modulen und überprüfe die Reklamationsroute.",
      "«Reklamation wegen beschädigter Ware» wurde korrekt an die Reklamationsantwort weitergegeben.",
      "Vergleiche die beiden Filter, ergänze einen Testeintrag und starte Run once.",
      "Welche Route erhält «Reklamation wegen beschädigter Ware»?",
      [
        "Normale Anfrage (Fallback)",
        "Reklamation",
        "Keine Route"
      ],
      1,
      "<h3>Unser Make-Szenario</h3><ol><li>Öffne «M219 Academy | Erste Automatisierung» und lasse das Scheduling während der Bearbeitung <strong>Inactive</strong>.</li><li>Öffne das Kontextmenü auf der Verbindung Google Sheets → Gmail und wähle <strong>Add router</strong>.</li><li>Erstelle einen zweiten Weg mit <strong>Gmail → Send an email</strong>.</li><li>Stelle beim normalen Gmail-Weg «Set the route as a fallback» auf <strong>Yes</strong>.</li><li>Stelle beim Reklamationsweg <strong>Fallback: No</strong> ein und prüfe <strong>Anfrage (C) → Contains (case insensitive) → Reklamation</strong>.</li><li>Verwende im zweiten Gmail-Modul als Betreff «Reklamation erhalten | M219 Academy» und mappe Empfänger, Name und Anfrage.</li></ol><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-filter-top.png\" alt=\"Make-Screenshot: Die obere Route wird als Fallback für gewöhnliche Anfragen eingestellt.\" loading=\"lazy\"><figcaption>Die obere Route wird als Fallback für gewöhnliche Anfragen eingestellt.</figcaption></figure><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-filter-reklamation.png\" alt=\"Make-Screenshot: Der untere Weg verwendet die Bedingung für Reklamationen.\" loading=\"lazy\"><figcaption>Der untere Weg verwendet die Bedingung für Reklamationen.</figcaption></figure><h3>Mit echten Testdaten prüfen</h3><p>Wir haben in Google Sheets einen neuen Testdatensatz mit «Test Person 3» und «Reklamation wegen beschädigter Ware» erstellt und das Szenario mit <strong>Run once</strong> ausgeführt.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-sheet.png\" alt=\"Make-Screenshot: Der Testdatensatz mit der Reklamation in Google Sheets.\" loading=\"lazy\"><figcaption>Der Testdatensatz mit der Reklamation in Google Sheets.</figcaption></figure><figure class=\"lesson-figure\"><img src=\"./assets/images/lp4-mail-result.png\" alt=\"Make-Screenshot: Die Reklamations-E-Mail wurde erfolgreich zugestellt.\" loading=\"lazy\"><figcaption>Die Reklamations-E-Mail wurde erfolgreich zugestellt.</figcaption></figure><p>Damit ist der Reklamationszweig praktisch bestätigt. Die allgemeine Fallback-Route muss für einen vollständigen Funktionstest zusätzlich mit einer gewöhnlichen Anfrage geprüft werden. Das gezeigte Ergebnis stammt aus einem <strong>manuellen Run-once-Test</strong>.</p><div class=\"notice\"><strong>Fehlerbehebung</strong><p>Im Screenshot steht noch der Platzhalter «[NAME]» vor dem eingefügten Namen. Das ist ein Textfehler im Gmail-Modul, kein Fehler des Routers. Entferne den Platzhalter und speichere das Modul erneut.</p></div>"
    ],
    [
      "Abschlussquiz: Workflow Navigator",
      "Prüfe Filter, Router und Fallback anhand von zehn Fragen.",
      "Bestanden mit mindestens 8 von 10 Antworten.",
      "Löse den Wissenstest und schliesse LP4 ab.",
      "Was bewirkt «Contains (case insensitive)»?",
      [
        "Es ignoriert die Gross- und Kleinschreibung bei der Suche",
        "Es löscht alle E-Mails",
        "Es startet die Zeitschaltung"
      ],
      0,
      "<h3>Wissenscheck: Smart Workflow Logic</h3><p>Du kennst nun Filter, Textoperatoren, AND/OR, Router und die Fallback-Route. Bearbeite die <strong>10 Fragen</strong>. Ab <strong>8 richtigen Antworten</strong> ist LP4 bestanden.</p><p>Wiederholungen sind möglich, XP werden aber pro abgeschlossenem Wissenscheck und pro Lektion nur einmal gezählt.</p><p>Nach dem Abschluss wird LP5 freigeschaltet, sobald dessen Inhalte bereitstehen.</p>"
    ]
  ]
},
  {
  "title": "Test & Automate: Dein Workflow im Einsatz",
  "icon": "05",
  "summary": "Run once, Scheduling, History, Credits und Fehlerbehebung verstehen.",
  "lessons": [
    [
      "Szenarien richtig testen",
      "Lerne, wie Run once funktioniert und woran du eine erfolgreiche Ausführung erkennst.",
      "Bei Run once wird das Szenario einmal manuell gestartet.",
      "Prüfe die grünen Häkchen und die verarbeiteten Module im Szenario.",
      "Was macht Run once?",
      [
        "Es startet das Szenario einmal manuell",
        "Es aktiviert automatisch tägliche Läufe",
        "Es setzt alle Module zurück"
      ],
      0,
      "<h3>Warum überhaupt testen?</h3><p>Bevor ein Szenario dauerhaft läuft, solltest du kontrollieren, ob alle Module richtig konfiguriert sind. Ein Test kann unerwartete Empfänger, falsche Feldzuordnungen und fehlende Daten sichtbar machen.</p><h3>Einmal ausführen: Run once</h3><p>Öffne dein Szenario im Editor. Trage in deinem Google Sheet eine neue Testzeile mit einer eigenen E-Mail-Adresse ein. Klicke danach auf <strong>Run once</strong>. Make liest die neuen Daten und übergibt sie an die weiteren Module, sofern die Bedingungen der Route erfüllt sind.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp5-diagram.png\" loading=\"lazy\" alt=\"Dein Szenario mit Google Sheets, Router und zwei Gmail-Routen. Rechts sind Status und Verbrauch sichtbar.\"><figcaption>Dein Szenario mit Google Sheets, Router und zwei Gmail-Routen. Rechts sind Status und Verbrauch sichtbar.</figcaption></figure><h3>Was bedeuten die grünen Markierungen?</h3><p>Ein grünes Häkchen zeigt, dass das jeweilige Modul erfolgreich ausgeführt wurde. Das heisst nicht zwingend, dass in jedem Durchlauf eine E-Mail gesendet wurde. Wenn keine neue Zeile gefunden wird, kann das Szenario ohne anschliessende Gmail-Aktion enden.</p><div class=\"task\"><strong>Praxis</strong><p>Teste ausschliesslich mit deiner eigenen E-Mail-Adresse. Notiere, welcher Zweig ausgeführt wurde und ob die E-Mail tatsächlich im Postfach eingetroffen ist.</p></div>"
    ],
    [
      "Scheduling: automatisch statt manuell",
      "Verstehe den Unterschied zwischen manuellen Tests und geplanten Durchläufen.",
      "Eine aktive Planung kann das Szenario regelmässig starten.",
      "Finde die Einstellung Every 15 minutes und die Optionen für einmalig, täglich oder wöchentlich.",
      "Welche Einstellung ist für wiederholte automatische Ausführungen gedacht?",
      [
        "Run once",
        "At regular intervals",
        "Scenario name"
      ],
      1,
      "<h3>Was bedeutet Scheduling?</h3><p>Mit dem <strong>Scheduling</strong> legst du fest, wann Make ein Szenario startet. Bei Google Sheets «Watch New Rows» prüft Make beispielsweise in bestimmten Abständen, ob neue Tabellenzeilen vorhanden sind.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp5-schedule.png\" loading=\"lazy\" alt=\"Schedule settings: At regular intervals, Once, Daily, Weekdays, Weekly, Monthly, Specified dates und On demand.\"><figcaption>Schedule settings: At regular intervals, Once, Daily, Weekdays, Weekly, Monthly, Specified dates und On demand.</figcaption></figure><h3>Häufige Einstellungen</h3><p><strong>At regular intervals</strong> wiederholt die Prüfung nach einem gewählten Zeitabstand. <strong>Once</strong> ist für eine geplante einmalige Ausführung gedacht. <strong>Daily</strong>, <strong>Weekly</strong> oder <strong>Monthly</strong> legen passende wiederkehrende Zeitpunkte fest. <strong>On demand</strong> startet nicht automatisch nach einem Zeitplan.</p><h3>Active und Inactive</h3><p>Steht dein Szenario auf <strong>Inactive</strong>, läuft die geplante Ausführung nicht. Wenn du es aktivierst, kann Make gemäss Zeitplan neue Daten prüfen. Die tatsächliche Frequenz hängt von deinem Plan und den gewählten Einstellungen ab.</p><div class=\"notice\"><strong>Aus unserer Praxis</strong><p>Im Szenario war «Every 15 minutes» konfiguriert. Der Screenshot aus der History zeigt ausserdem Läufe mit «Schedule» und «Success». Die Versuche mit Gmail wurden zusätzlich manuell über «Run once» getestet.</p></div>"
    ],
    [
      "History, Credits und Operations",
      "Lerne, wie du ausgeführte Szenarien nachvollziehst und ihren Verbrauch liest.",
      "In der History stehen Zeit, Startart und Status der vergangenen Durchläufe.",
      "Vergleiche in History einen Manual run mit einem Schedule-Lauf.",
      "Was bedeutet die Angabe Manual run?",
      [
        "Das Szenario wurde manuell gestartet",
        "Der Workflow wurde gelöscht",
        "Die Verbindung ist abgelaufen"
      ],
      0,
      "<h3>Warum ist die History wichtig?</h3><p>Unter <strong>History</strong> kannst du frühere Ausführungen prüfen. Das ist besonders hilfreich, wenn eine E-Mail nicht angekommen ist oder du wissen möchtest, wann ein Szenario zuletzt gelaufen ist.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp5-history.png\" loading=\"lazy\" alt=\"History: Manual run, Schedule, Scenario edited und die Statusanzeige Success im selben Verlauf.\"><figcaption>History: Manual run, Schedule, Scenario edited und die Statusanzeige Success im selben Verlauf.</figcaption></figure><h3>Manual run und Schedule erkennen</h3><p>In unserer History siehst du sowohl manuelle Tests als auch geplante Ausführungen. <strong>Success</strong> bedeutet, dass der jeweilige Durchlauf erfolgreich abgeschlossen wurde. Prüfe zusätzlich die Laufdetails, um zu sehen, welche Module tatsächlich aktiv waren.</p><figure class=\"lesson-figure\"><img src=\"./assets/images/lp5-run-details.png\" loading=\"lazy\" alt=\"Ein erfolgreicher manueller Lauf mit 1 Operation und ohne Gmail-Ausführung: nicht jeder erfolgreiche Lauf sendet eine E-Mail.\"><figcaption>Ein erfolgreicher manueller Lauf mit 1 Operation und ohne Gmail-Ausführung: nicht jeder erfolgreiche Lauf sendet eine E-Mail.</figcaption></figure><h3>Operations, Credits und Datentransfer</h3><p>Make zeigt für Durchläufe unter anderem ausgeführte <strong>Operations</strong>, den Verbrauch an <strong>Credits</strong> und die übertragene Datenmenge an. Diese Werte helfen dir, Nutzung und mögliche Tarifgrenzen einzuschätzen. Wie Credits genau abgerechnet werden, hängt von den verwendeten Funktionen und dem Make-Tarif ab.</p><div class=\"task\"><strong>Praxis</strong><p>Öffne einen erfolgreichen Verlaufseintrag und finde Startzeit, Trigger, Dauer, Operations und Status. Prüfe, ob beide Gmail-Module oder nur der Google-Sheets-Trigger ausgeführt wurden.</p></div>"
    ],
    [
      "Fehler und unvollständige Ausführungen",
      "Erkenne häufige Fehler und verstehe die Übersicht Incomplete Executions.",
      "Nicht jede erfolgreiche Ausführung verarbeitet eine neue Tabellenzeile.",
      "Prüfe die Ansicht Incomplete Executions und überlege dir drei mögliche Fehlerquellen.",
      "Was bedeutet No items found unter Incomplete Executions?",
      [
        "Es gibt keine dort aufgelisteten unvollständigen Ausführungen",
        "Alle bisherigen E-Mails wurden gelöscht",
        "Alle Verbindungen sind ungültig"
      ],
      0,
      "<h3>Typische Fehlerquellen</h3><p>Fehler können auftreten, wenn eine Verbindung ihre Berechtigung verliert, das ausgewählte Spreadsheet nicht mehr existiert, ein erforderliches Feld leer bleibt oder ein Modul die Daten nicht im erwarteten Format erhält.</p><h3>Wie gehst du bei Problemen vor?</h3><ol><li>Öffne die <strong>History</strong> und suche den betreffenden Durchlauf.</li><li>Prüfe den Status sowie die Ausführungsdetails und Fehlermeldungen.</li><li>Kontrolliere die Verbindung, die Modul-Konfiguration und die Werte aus Google Sheets.</li><li>Korrigiere den Fehler und teste mit <strong>Run once</strong> erneut.</li></ol><figure class=\"lesson-figure\"><img src=\"./assets/images/lp5-incomplete.png\" loading=\"lazy\" alt=\"Incomplete Executions zeigt in unserem Test «No items found». Es wurden dort keine Einträge angezeigt.\"><figcaption>Incomplete Executions zeigt in unserem Test «No items found». Es wurden dort keine Einträge angezeigt.</figcaption></figure><h3>Incomplete Executions</h3><p>Diese Übersicht kann unvollständige Ausführungen anzeigen, sofern deren Speicherung entsprechend konfiguriert ist. Ob du einen fehlerhaften Lauf wieder aufnehmen kannst, hängt von den Einstellungen und vom Fehler ab. Ein leerer Bildschirm belegt deshalb nicht, dass ein Szenario niemals einen Fehler hatte.</p><div class=\"notice\"><strong>Merke</strong><p>Verändere nicht absichtlich eine echte Verbindung, nur um einen Fehler zu erzeugen. Für den Lernpfad genügt es, die Ursachen und die Prüfschritte zu verstehen.</p></div>"
    ],
    [
      "Abschlussquiz: Automation Expert",
      "Zeige in zehn Fragen, dass du Workflows testen und überwachen kannst.",
      "Mit mindestens 8 richtigen Antworten ist LP5 bestanden und der Kurs abgeschlossen.",
      "Beantworte alle Fragen und schliesse deinen fünften Lernpfad ab.",
      "Welche Aussage über Success ist korrekt?",
      [
        "Success garantiert immer eine verschickte E-Mail",
        "Success sagt aus, dass der Lauf erfolgreich abgeschlossen wurde",
        "Success bedeutet eine unbeschränkte Anzahl Credits"
      ],
      1,
      "<h3>Dein letzter Wissenscheck</h3><p>Du hast in den fünf Lernpfaden gelernt, Make zu bedienen, ein Szenario aufzubauen, Daten zuzuordnen, mit Filtern unterschiedliche Wege zu wählen und Ausführungen zu überprüfen.</p><p>Beantworte jetzt die <strong>10 Abschlussfragen</strong>. Mit mindestens <strong>8 richtigen Antworten</strong> bestehst du LP5 und schliesst damit den gesamten Kurs der M219 Academy ab.</p><div class=\"notice\"><strong>Geschafft?</strong><p>Der Kursabschluss wird in deinem Lernfortschritt gespeichert. Ein personalisiertes Zertifikat ergänzen wir später als eigene Funktion.</p></div>"
    ]
  ]
}
];

export const finalQuestions = [
  [
    [
      "Was ist Make.com?",
      [
        "Eine visuelle Automatisierungsplattform",
        "Ein Betriebssystem",
        "Ein Videospiel"
      ],
      0
    ],
    [
      "Wie hiess Make früher?",
      [
        "Zapier",
        "Integromat",
        "Power Apps"
      ],
      1
    ],
    [
      "Was ist ein Szenario?",
      [
        "Ein Benutzerkonto",
        "Der gesamte automatisierte Ablauf",
        "Eine App"
      ],
      1
    ],
    [
      "Was ist ein Modul?",
      [
        "Ein Arbeitsschritt im Szenario",
        "Nur eine E-Mail-Adresse",
        "Eine Browser-Erweiterung"
      ],
      0
    ],
    [
      "Wofür dient ein Trigger?",
      [
        "Er verändert das Design",
        "Er löst den Ablauf aus",
        "Er löscht den Account"
      ],
      1
    ],
    [
      "Welche Aufgabe erfüllt eine Action?",
      [
        "Sie führt einen Arbeitsschritt aus",
        "Sie erstellt nur Passwörter",
        "Sie benennt das Projekt"
      ],
      0
    ],
    [
      "Wo erstellst du einen Workflow?",
      [
        "Im Szenario-Editor",
        "Im Papierkorb",
        "In der Kontoabrechnung"
      ],
      0
    ],
    [
      "Wofür sind Templates nützlich?",
      [
        "Als fertige Vorlagen",
        "Zum Löschen von Apps",
        "Als Passwortmanager"
      ],
      0
    ],
    [
      "Was macht ein Polling Trigger?",
      [
        "Er überprüft in Abständen auf neue Daten",
        "Er macht Screenshots",
        "Er versendet automatisch Rechnungen ohne Konfiguration"
      ],
      0
    ],
    [
      "Welches Beispiel ist eine Automatisierung?",
      [
        "Jedes Mal manuell eine E-Mail schreiben",
        "Neue Formularantwort automatisch in Tabelle speichern",
        "Einmal einen Text lesen"
      ],
      1
    ]
  ],
  [
    [
      "Was ist unser Trigger?",
      [
        "Gmail Send an email",
        "Google Sheets Watch New Rows",
        "Ein Profilbild"
      ],
      1
    ],
    [
      "Welche Überschriften benötigt unser Beispiel?",
      [
        "Name, E-Mail, Anfrage",
        "Nur Status",
        "Preis und Rabatt"
      ],
      0
    ],
    [
      "Was bedeutet A1:C1?",
      [
        "Die Kopfzeilen von Spalte A bis C",
        "Alle Tabellen",
        "Die letzten drei Zeilen"
      ],
      0
    ],
    [
      "Was macht «Limit 2»?",
      [
        "Die Anzahl der maximal verarbeiteten Datensätze pro Ausführung begrenzen",
        "Zwei Konten erstellen",
        "Zwei Stunden warten"
      ],
      0
    ],
    [
      "In welches Feld wird E-Mail (B) gemappt?",
      [
        "Subject",
        "To",
        "Content type"
      ],
      1
    ],
    [
      "Was ist Mapping?",
      [
        "Eintragen einer festen Adresse",
        "Weitergabe dynamischer Werte zwischen Modulen",
        "Ändern der Benutzeroberfläche"
      ],
      1
    ],
    [
      "Welche Variable wird für die Anrede benötigt?",
      [
        "Name (A)",
        "Anfrage (C)",
        "E-Mail (B)"
      ],
      0
    ],
    [
      "Was macht Run once?",
      [
        "Führt das Szenario einmal testweise aus",
        "Aktiviert ein Szenario für immer",
        "Löscht die Tabelle"
      ],
      0
    ],
    [
      "Wann kann «All» problematisch sein?",
      [
        "Wenn alte Zeilen unerwünschte Empfänger enthalten",
        "Wenn das Bild zu gross ist",
        "Wenn die Tabelle einen Titel hat"
      ],
      0
    ],
    [
      "Was wurde in unserem Test tatsächlich nachgewiesen?",
      [
        "Automatische Ausführung exakt nach 15 Minuten",
        "Erfolgreicher manueller E-Mail-Versand mit Run once",
        "Fehlerfreie Ausführung aller zukünftigen Läufe"
      ],
      1
    ]
  ],
[
  [
    "Was bezeichnet ein Bundle?",
    [
      "Eine Dateneinheit aus einer Modulausführung",
      "Eine E-Mail-Adresse",
      "Einen Benutzeraccount"
    ],
    0
  ],
  [
    "Welche Werte lieferte Google Sheets im Beispiel?",
    [
      "Name, E-Mail und Anfrage",
      "Nur ein Passwort",
      "Nur ein Bild"
    ],
    0
  ],
  [
    "Was bedeutet Mapping?",
    [
      "Dynamische Daten einem Zielfeld zuordnen",
      "Ein Profilbild hochladen",
      "Den Bildschirm vergrössern"
    ],
    0
  ],
  [
    "Welche Variable kommt in das Gmail-Feld To?",
    [
      "Name (A)",
      "E-Mail (B)",
      "Anfrage (C)"
    ],
    1
  ],
  [
    "Wozu dient Name (A) im Nachrichtentext?",
    [
      "Als persönliche Anrede",
      "Als Zeitplan",
      "Als Dateiname"
    ],
    0
  ],
  [
    "Was bewirkt upper(\"max mustermann\")?",
    [
      "max mustermann",
      "MAX MUSTERMANN",
      "Max mustermann"
    ],
    1
  ],
  [
    "Wozu dient trim()?",
    [
      "Zum Entfernen äusserer Leerzeichen",
      "Zum Löschen aller Zeilen",
      "Zur Übersetzung"
    ],
    0
  ],
  [
    "Wird mit upper() im Subject auch die Originalzelle geändert?",
    [
      "Nein",
      "Ja",
      "Nur bei Gmail"
    ],
    0
  ],
  [
    "Wieso war der Name im Nachrichtentext weiterhin klein?",
    [
      "upper() wurde dort nicht verwendet",
      "Gmail hat den Text blockiert",
      "Es gab keinen Trigger"
    ],
    0
  ],
  [
    "Was hat unser Test tatsächlich gezeigt?",
    [
      "Eine Zustellung nach genau 15 Minuten",
      "Erfolgreiche manuelle Run-once-Ausführung",
      "Automatische Ausführung für jedes zukünftige Ereignis"
    ],
    1
  ]
],
[
  [
    "Was kontrolliert ein Filter?",
    [
      "Ob Daten unter bestimmten Bedingungen weitergehen",
      "Ob das Profilbild sichtbar ist",
      "Ob ein neues Konto erstellt wird"
    ],
    0
  ],
  [
    "Was prüft «Contains»?",
    [
      "Ob ein Teiltext im Feld vorkommt",
      "Ob Zahlen addiert werden",
      "Ob eine Datei gelöscht wurde"
    ],
    0
  ],
  [
    "Was bedeutet «case insensitive»?",
    [
      "Nur Grossbuchstaben",
      "Gross- und Kleinschreibung wird ignoriert",
      "Nur ein exakter Wortlaut"
    ],
    1
  ],
  [
    "Was bedeutet AND?",
    [
      "Mindestens eine Bedingung",
      "Alle verknüpften Bedingungen müssen wahr sein",
      "Keine Bedingung gilt"
    ],
    1
  ],
  [
    "Was bedeutet OR?",
    [
      "Eine der Bedingungen kann genügen",
      "Alle Bedingungen sind immer falsch",
      "Der Router wird gelöscht"
    ],
    0
  ],
  [
    "Welche Aufgabe hat ein Router?",
    [
      "Datenflüsse auf mehrere Wege verteilen",
      "Nur E-Mails speichern",
      "Die Anmeldung verwalten"
    ],
    0
  ],
  [
    "Wann wird die Fallback-Route verwendet?",
    [
      "Wenn keine der anderen Routen passt",
      "Vor jeder Route ohne Ausnahme",
      "Nur beim ersten Login"
    ],
    0
  ],
  [
    "Welche Variable verwenden wir im Reklamationsfilter?",
    [
      "Name (A)",
      "Anfrage (C)",
      "E-Mail (B)"
    ],
    1
  ],
  [
    "Welche Anfrage passt zum Reklamationsfilter?",
    [
      "Preisanfrage",
      "Produktinformation",
      "Reklamation wegen beschädigter Ware"
    ],
    2
  ],
  [
    "Was belegt unser LP4-Test?",
    [
      "Eine erfolgreiche Run-once-Ausführung der Reklamationsroute",
      "Die automatische Ausführung nach genau 15 Minuten",
      "Den vollständigen Test beider Routen"
    ],
    0
  ]
],
  [
  [
    "Wofür ist Run once gedacht?",
    [
      "Für eine manuelle Testausführung",
      "Um den Tarif zu kündigen",
      "Um die Anmeldung zu ändern"
    ],
    0
  ],
  [
    "Was prüft Watch New Rows?",
    [
      "Neue Zeilen in der gewählten Tabelle",
      "Neue Browser-Tabs",
      "Das Passwort"
    ],
    0
  ],
  [
    "Was bedeutet Active in Verbindung mit Scheduling?",
    [
      "Geplante Ausführungen sind aktiviert",
      "Alle E-Mails sind angekommen",
      "Der Router wird deaktiviert"
    ],
    0
  ],
  [
    "Welche Option wiederholt eine Ausführung nach einem Zeitintervall?",
    [
      "Once",
      "At regular intervals",
      "Rename scenario"
    ],
    1
  ],
  [
    "Wie erkennst du einen manuell gestarteten Verlaufseintrag?",
    [
      "Manual run",
      "Scheduled monthly",
      "Sign out"
    ],
    0
  ],
  [
    "Was bedeutet Success?",
    [
      "Ein Lauf wurde erfolgreich abgeschlossen",
      "Jeder Gmail-Zweig wurde immer ausgeführt",
      "Es gab mindestens 100 Zeilen"
    ],
    0
  ],
  [
    "Wo prüfst du vergangene Durchläufe?",
    [
      "Templates",
      "History",
      "My Plan"
    ],
    1
  ],
  [
    "Was zeigt die Angabe Operations an?",
    [
      "Ausgeführte Verarbeitungsschritte im Lauf",
      "Die Anzahl registrierter Nutzer",
      "Die Zahl der gespeicherten Passwörter"
    ],
    0
  ],
  [
    "Was sagt No items found unter Incomplete Executions aus?",
    [
      "Es sind dort aktuell keine unvollständigen Ausführungen aufgeführt",
      "Das Szenario hat garantiert niemals einen Fehler gehabt",
      "Das Konto wurde gelöscht"
    ],
    0
  ],
  [
    "Was solltest du bei einer fehlgeschlagenen E-Mail zuerst tun?",
    [
      "Die History und die Modul-Einstellungen prüfen",
      "Sofort alle Module entfernen",
      "Ungeprüft zehnmal Run once starten"
    ],
    0
  ]
]
];
