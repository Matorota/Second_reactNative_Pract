# Sveiko maisto receptai

## Aprašymas

Mobilioji programėlė **„Sveiko maisto receptai“** skirta peržiūrėti receptus pagal kategorijas, žiūrėti recepto detales ir palikti komentarus. Tai paprastas React Native / Expo projektas, skirtas mokymuisi ir užduoties įgyvendinimui.

---

## Funkcionalumas

* Receptų kategorijos (pvz., sriubos, desertai, pagrindiniai patiekalai). Kiekviena kategorija atvaizduojama atskirame ekrane.
* Navigacija tarp ekranų naudojant **React Navigation** arba **Expo Router** (Stack arba Tab navigatorius).
* Receptų duomenys saugomi JSON formatu programos masyve/objekte.
* Recepto atvaizdavimas: atidarius receptą matomas pavadinimas, ingredientai ir paruošimo instrukcijos.
* Komentarų sistema: vartotojas gali įterpti, peržiūrėti ir ištrinti komentarus. Komentarai saugomi vietoje naudojant **AsyncStorage**.

---

## Vertinimo (taškų) sistema

* Navigacija tarp skirtingų ekrano langų: **3 taškai**
* Receptų masyvas JSON formatu su kategorijomis: **1 taškas**
* Recepto atvaizdavimas: **2 taškai**
* Funkcija įterpti komentarą: **2 taškai**
* Funkcija atvaizduoti komentarus: **1 taškas**
* Funkcija ištrinti komentarą: **1 taškas**

---

## Technologijos

* React Native (arba Expo)
* React Navigation arba Expo Router
* AsyncStorage (pvz., `@react-native-async-storage/async-storage`)
* JavaScript arba TypeScript

---

## Patarimai vertinimui

* Užtikrinkite, kad navigacija veikia sklandžiai (3 taškai).
* Receptai turi būti pateikti kaip JSON masyvas (1 taškas).
* Recepto detalių langas turi rodyti pavadinimą, ingredientus ir instrukcijas (2 taškai).
* Patikrinkite, kad komentarai išsaugomi ir vėl atvaizduojami naudojant AsyncStorage (3 taškai bendrai — įterpimas 2 + atvaizdavimas 1).
* Pridėkite galimybę ištrinti komentarą (1 taškas).

---


## Autorius

Matas Štrimaitis

