# boilerplate_MOBILE

Guide d'installation de l'application mobile boilerplate en React Native.

## Pré-requis

#### Node.js

Le projet necessite la version v16.15.0 du Node
Je recommende l'installation de Node Version Manager [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
`node -v` pour s'assuer que la version installée est la bonne

## IOS

#### Ruby

Si vous êtes sur MacOs Ruby est utilisé par React-Native dans certains scripts liés à la gestion des dépendances
je suggére installer un gestionnaire de version Ruby et d'installer la bonne version de Ruby sur votre système.

Le projet necessite la version 2.7.6 du Ruby

sur Mac:

- [ ] Installer ruby version manager rbenv: `brew install rbenv ruby-build`
- [ ] Instaler la version requirse de ruby: `rbenv install 2.7.6`
- [ ] Use version: `rbenv global 2.7.6`
- [ ] check version: `rbenv local`
- [ ] If the version won’t be set open .bash_profile and add `export PATH="$HOME/.rbenv/bin:$PATH" eval "$(rbenv init -)"` save then execute `source .bash_profile`

#### Xcode:

Le moyen le plus simple d'installer Xcode est via le Mac App Store. L'installation de Xcode installera également le simulateur iOS et tous les outils nécessaires pour créer votre application iOS.

##Command Line Tools

Vous devrez également installer les outils de ligne de commande Xcode. Ouvrez Xcode, puis choisissez "Préférences..." dans le menu Xcode. Accédez au panneau Emplacements et installez les outils en sélectionnant la version la plus récente dans la liste déroulante Outils de ligne de commande.

Si vous avez déjà installé un package global react-native-cli, veuillez le supprimer car il peut entraîner des problèmes inattendus :

```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

## Android

#### Android Studio

Téléchargez et installez Android Studio. Dans l'assistant d'installation d'Android Studio, assurez-vous que les cases à côté de tous les éléments suivants sont cochées :

[ ] SDK Android
[ ] Plate-forme SDK Android
[ ] Appareil virtuel Android

Ensuite, cliquez sur "Suivant" pour installer tous ces composants.

#### SDK

Android Studio installe le dernier SDK Android par défaut. Cependant, la construction d'une application React Native avec du code natif nécessite en particulier le SDK Android 12 (S). Des SDK Android supplémentaires peuvent être installés via le gestionnaire de SDK dans Android Studio.

Pour ce faire, ouvrez Android Studio, cliquez sur le bouton "Plus d'actions" et sélectionnez "Gestionnaire de SDK".

Sélectionnez l'onglet "Plateformes SDK" dans le gestionnaire de SDK, puis cochez la case à côté de "Afficher les détails du package" dans le coin inférieur droit. Recherchez et développez l'entrée Android 12 (S), puis assurez-vous que les éléments suivants sont cochés :

Android SDK Platform 31
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image

Ensuite, sélectionnez l'onglet "Outils SDK" et cochez également la case à côté de "Afficher les détails du package". Recherchez et développez l'entrée "Android SDK Build-Tools", puis assurez-vous que 31.0.0 est sélectionné.
Enfin, cliquez sur "Appliquer" pour télécharger et installer le SDK Android et les outils de construction associés.

### Configurer la variable d'environnement ANDROID_HOME

Les outils React Native nécessitent la configuration de certaines variables d'environnement afin de créer des applications avec du code natif.

Ajoutez les lignes suivantes à votre fichier de configuration ~/.zprofile ou ~/.zshrc (si vous utilisez bash, alors ~/.bash_profile ou ~/.bashrc) :

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

pour charger la configuration dans votre shell actuel, exécutez la commande

```bash
source ~/.zprofile
```

(ou pour bash la commande)

```bash
source ~/.bash_profile
```

Vérifiez que ANDROID_HOME a été défini en exécutant

```bash
echo $ANDROID_HOME
```

et que les répertoires appropriés ont été ajoutés à votre chemin en exécutant

```bash
echo $PATH
```

### Installation

Après avoir cloner le projet via git

```bash
git clone http://gitlab.slagsoa-consulting.net/ifce/boilerplate_mobile
```

Avant de lancer le projet il faut d'abord installer les dépendences du projet via une commande

```bash
npm install
```

Vous allez remarquer la creation du dossier nodes_modules dans la racine du projet.

### Lancer L'application

Pour IOS démarrer l'application via la commande

```bash
npx react-native run-ios
```

Pour Android démarrer l'application via la commande

```bash
npx react-native run-android
```

## L'arborescence de l'application:

- My-React-Native-Boilerplate
  - **tests**
  - .bundle
  - .vscode
  - android
  - app
    - components
      - common
      - home
      - login
      - ...
    - config
    - navigation
    - screens
      - home
      - login
      - ...
    - store
      - home
      - actions.js
      - index.js
      - rootReducer.js
      - rootSaga.js
    - styles
    - util
    - App.js
  - assets
  - ios
  - vendor
  - .env
  - .eslintignore
  - .eslintrc.json
  - .gitignore
  - .node-version
  - .prettierrc.json
  - .ruby-version
  - .watchmanconfig
  - app.json
  - babel.config.js
  - Gemfile
  - Gemfile.lock
  - index.js
  - jsconfig.json
  - metro.config.js
  - package-lock.json
  - package.json
  - react-native.config.js
  - Readme.md
  - yarn.lock

**components**
Ce dossier doit contenir tous les composants personalisés de l'application, dedans on va créer un dossier pour chaque screen qui necessite la création d'un comoposant pérsonalisé, et un dossier **common** qui doit contenir tous les composants que nous utiliserons dans plusieurs écrans.

**screenWrapper.jsx**  
le composant screenWrapper.jsx qui se trouve dans le dossier commun du dossier components sera la template de toutes les pages à crée au future.

**.env**  
Ici on définie les variables spécifiques à l'envirenement
Exemple d'utilisation: définition de l'url de l'API, ce fichier n'est pas sur git pour des raisons de sécurité, à sa place il y a le fichier **.env.exemple** qui lui contient les variables d'envirenement à remplir.

**ATTENTION** : pour faire des appels API pensez à modifier la valeur API_URL=https://jsonplaceholder.typicode.com

# Style

Des fonctions de scaling sont implémetées dand le script **mixins.js**

Toutes les couleures utilisées doivent être définies dans le fichier **colors.js**

```js
export const PRIMARY = '#f9ac19';
```

Les propriétés CSS qui modifie les fonts doivent être définies dans le fichier **typography.js**

```js
export const FONT_SIZE_12 = scaleFont(12);
```

Utilisez le script **spacing.js** pour définir les valeurs en pixel des propriétés CSS comme : Margin, Padding ... ajouter une ligne avec la valeur numéric sur laquelle vous souhaitez appliquer le scaling

```js
export const SCALE_2 = scaleSize(2);
```

## Icons

[Liste_des_icones](https://oblador.github.io/react-native-vector-icons/)

## Fonts

[ROBOTO](https://fonts.google.com/specimen/Roboto) est le font ajouté à l'application  
Suivez ce [tutoriel](https://blog.logrocket.com/adding-custom-fonts-react-native/#get-the-fonts-required-for-the-app)
pour réusir à ajouter une nouvelle famille de fonts.
**N.B**: la commande link de React Native a été supprimer des versions de React Native supérieur à 0.69.

Il faut passer par cette librairies `react-native-asset` 
Pour lier automatiquement les fonts, exécutez simplement la commande suivante:

```bash
npx react-native-asset
```

##SVG##

Pour utiliser des images en format SVG il faut passer par ces deux étapes qui font convertir les le fichier SVG en composant React Native.  
Dans un premier temps il faut charger le fichier sur cette [page](https://svg2jsx.com/) après copier le contenu de return() de l'output JSX, et le coller sur cette [page](https://react-svgr.com/playground/?native=true) et enfin vous aurez votre composant JSX à integrer directement au projet.

## L'éditeur Vscode

L'utilisation de l'éditeur VS code est recommender

# liste des extensions de VS Code recommandées

Prettier  
Déscription: Code formatter using prettier  
Version: 9.10.4  
VS Marketplace [Lien](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

ES7+ React/Redux/React-Native snippets  
Déscription: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.  
Version: 4.4.3  
VS Marketplace [Lien](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

---

ESLint  
Déscription: Integrates ESLint JavaScript into VS Code.  
Version: 2.4.0  
VS Marketplace [Lien](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

Import Cost  
Déscription: Display import/require package size in the editor  
Version: 3.3.0  
VS Marketplace [Lien](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

---

Prettify JSON  
Déscription: Visual Studio Code Prettify JSON Extension  
Version: 0.0.3  
VS Marketplace [Lien](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)

---

vscode-icons  
Déscription: Icons for Visual Studio Code  
Version: 12.2.0  
VS Marketplace [Lien](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

---

## Linter settings

Copier cette config dans votre fichier de settings personel de VS code : settings.json
chemin : Code/User/settings.json

```JSON
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "prettier.singleQuote": true,
  "prettier.printWidth": 170,
  "explorer.compactFolders": false,
  "typescript.validate.enable": false,
  "javascript.validate.enable": false,
}
```

# Organisation et formatage de code

ESlint n'est pas seulement un formateur de code, il aide également les développeurs à trouver les erreurs de codage. Par exemple, ESLint vous donnera un avertissement si vous utilisez une variable sans la déclarer. Prettier n'a pas une telle capacité.
En outre, ESLint vous indiquera ce qui ne va pas avec le formatage de votre code et vous proposera des options pour résoudre le problème.

# Dépendence et Librairies

## Librairies:

[Client_http](https://axios-http.com/docs/intro) => axios version 1.3.2

[Navigation](https://reactnavigation.org/docs/params) => @react-navigation/native versiom 6.1.3

[immutable](https://immerjs.github.io/immer/) => immer version 9.0.19

[Formulaire](https://react-hook-form.com/api/usecontroller/controller/) => react-hook-form version 7.43.0 et @hookform/resolvers version 2.9.11

[Validation formulaire](https://github.com/jquense/yup/tree/pre-v1) yup version 1.0.0

[Variables_envirenement](https://www.npmjs.com/package/react-native-dotenv) => react-native-dotenv version 3.4.7

[Icônes](https://github.com/oblador/react-native-vector-icons) => react-native-vector-icons version 9.2.0

[Gestion_du_store](https://redux-saga.js.org/docs/introduction/GettingStarted) => react-reduxversion 8.0.5 et redux version 4.2.1

[Persister_les_données](https://www.npmjs.com/package/redux-persist) => redux-persist version 6.0.0

[Side_effect_manager](https://redux-saga.js.org/) => redux-saga version 1.2.2

[Date_utility](https://date-fns.org/) => date-fns version 2.29.3

[Date&Time_Picker](https://www.npmjs.com/package/@react-native-community/datetimepicker) => "@react-native-community/datetimepicker" version 6.7.5
[Date&Time_Picker_Modal](https://www.npmjs.com/package/react-native-modal-datetime-picker) => react-native-modal-datetime-picker version 14.0.1

[SVG](https://www.npmjs.com/package/react-native-svg) => react-native-svg version 13.8.0

[MaskedText](https://github.com/bhrott/react-native-masked-text) => react-native-masked-text version 1.13.0

[Network](https://www.npmjs.com/package/@react-native-community/netinfo) => @react-native-community/netinfo versiom 9.3.7

[zoomableView](https://www.npmjs.com/package/@openspacelabs/react-native-zoomable-view?activeTab=readme) => @openspacelabs/react-native-zoomable-view version 2.1.1

[ListeDeroulante](https://github.com/AdelRedaa97/react-native-select-dropdown#data) => react-native-select-dropdown version 3.3.0

## Dev Dependencies:

[Eslint](https://github.com/vasilestefirta/react-native-eslint-prettier-example)

[Prettier](https://prettier.io/)

# Debugging

[Chrome Debbuger](https://reactnative.dev/docs/debugging#chrome-developer-tools)
