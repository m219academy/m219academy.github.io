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
  }
];
export const finalQuestions = [
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
];

