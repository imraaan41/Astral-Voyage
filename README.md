# Astral Voyage

Astral Voyage ist ein Full-Stack-Projekt mit einem **Flutter-Frontend** und einem **Node.js-Backend**.  
Das Frontend stellt die Benutzeroberfläche bereit, während das Backend eine **REST API** bereitstellt.

Die Kommunikation zwischen Frontend und Backend erfolgt über **HTTP Requests**.

---

# Projektübersicht

Technologien im Projekt:

- Frontend: **Flutter (Dart)**
- Backend: **Node.js + Express**
- Kommunikation: **REST API**
- Versionskontrolle: **Git + GitHub**
- Entwicklungsumgebung: **VS Code**

---

# Projektstruktur

Astral-Voyage
│
├── frontend/ # Flutter App
│ ├── lib/
│ ├── android/
│ ├── ios/
│ ├── web/
│ ├── windows/
│ └── pubspec.yaml
│
├── backend/ # Node.js Backend
│ ├── server.js
│ ├── package.json
│ └── node_modules/
│
└── README.md

---

# Voraussetzungen

Folgende Software muss installiert sein, um das Projekt zu starten.

## 1. Git

Download:  
https://git-scm.com/downloads

Test:

```bash
git --version
```

## 2. Flutter

Über VS Code Extension **Dart und Flutter** installieren.

## 3. Node.Js mit Express

Über VS Code Terminal folgenden Befel eingeben:

```bash
   npm install express cors
```

# Starten vom Projekt

Den Frontend startet man mit:

```bash
flutter run
```

Wenn man das Projekt zum ersten Mal startet sollte man davor folgenden Befehl eingeben:

```bash
flutter pub get
```

Den Backend startet man mit:

```bash
node server.js
```
