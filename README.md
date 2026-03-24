Réponses aux questions
Q1 : Pourquoi structurer un pipeline avec des stages ?

Les stages permettent d'organiser les étapes dans l'ordre.
Exemple : test, puis build, puis deploy.

Q2 : À quoi sert le stage deploy même si le déploiement est simulé ?

Il sert à montrer la dernière étape du pipeline et à comprendre comment fonctionne un déploiement.

Q3 : Pourquoi le job de test est-il essentiel ?

Il permet de vérifier que le code fonctionne avant de continuer.

Q4 : Que se passe-t-il si le job de test échoue ?

Le pipeline s'arrête et les étapes suivantes ne doivent pas continuer.

Q5 : Pourquoi simuler une étape de build ?

Même sans vraie compilation, cela permet de comprendre la logique du pipeline.

Q6 : Comment l’erreur volontaire impacte-t-elle le pipeline ?

Elle provoque un échec et montre comment détecter un problème.

Q7 : Pourquoi utiliser un déploiement simulé avant la production ?

Cela permet de tester le processus sans risque.

Q8 : Comment un déploiement erroné peut-il impacter la chaîne CI/CD ?

Il peut envoyer une mauvaise version et provoquer des problèmes.

Q9 : Pourquoi les artefacts ou le cache peuvent-ils accélérer le pipeline ?

Ils évitent de refaire certaines actions, par exemple réinstaller les dépendances.

Q10 : Comment cela améliore l’efficacité du CI/CD ?

Le pipeline devient plus rapide et plus pratique.

Q11 : Pourquoi un retour d’information est-il essentiel ?

Il permet de savoir vite si le pipeline a réussi ou échoué.

Q12 : Comment le nettoyage de fichiers peut-il optimiser le pipeline ?

Il libère de l’espace et évite de garder des fichiers inutiles.