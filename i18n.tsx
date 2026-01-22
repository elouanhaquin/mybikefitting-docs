'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { trackLanguageChange } from '@/lib/analytics';

export type Language = 'fr' | 'en' | 'es' | 'de';

export const translations = {
  fr: {
    // Common
    loading: 'Chargement...',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    skip: 'Passer',
    retry: 'Réessayer',
    choose: 'Choisir',
    start: 'Commencer',
    finish: 'Terminer',
    cancel: 'Annuler',
    recommended: 'Recommandé',
    duration: 'Durée',

    // Breadcrumb
    breadcrumb: {
      evaluation: 'Évaluation',
      quiz: 'Quiz',
      mobility: 'Mobilité',
      analysis: 'Analyse',
      recommendations: 'Résultats',
    },

    // Home page
    home: {
      hero: {
        badge: 'Bikefitting gratuit · 5 minutes · Sans inscription',
        titleLine1: 'Étude posturale vélo',
        titleLine2: 'gratuite en ligne',
        description: 'Analysez votre position vélo par webcam, vidéo ou photo. Détectez les causes de vos douleurs (genou, dos, nuque) et obtenez des recommandations : hauteur de selle, recul, position du cintre.',
        cta: 'Commencer l\'analyse gratuite',
        resumeAnalysis: 'Reprendre mon analyse',
        howItWorks: 'Comment ça marche',
        analysisChoice: {
          title: 'Une analyse existe déjà',
          description: 'Vous avez déjà effectué une analyse. Que souhaitez-vous faire ?',
          viewResults: 'Voir mes résultats',
          startNew: 'Nouvelle analyse',
        },
      },
      preview: {
        analyzing: 'Analyse en cours...',
        kneeExtension: 'Extension genou',
        hipAngle: 'Angle hanche',
        backAngle: 'Inclinaison dos',
        armAngle: 'Angle bras',
        recommendation: 'Recommandation',
        saddleAdjust: 'Selle +2cm',
      },
      painPoints: {
        title: 'Douleurs à vélo ? Vous n\'êtes pas seul',
        knee: { title: 'Douleur genou vélo', desc: 'La cause #1 : une hauteur de selle mal réglée. Notre analyse détecte ce problème.' },
        back: { title: 'Mal de dos à vélo', desc: 'Souvent lié à une mauvaise position du cintre ou un recul de selle inadapté.' },
        fatigue: { title: 'Engourdissement des mains', desc: 'Trop de poids sur l\'avant ? L\'angle de votre dos et la potence sont à vérifier.' },
        conclusion: 'Dans 80% des cas, c\'est un problème de',
        position: 'position vélo',
      },
      steps: {
        title: '3 étapes, 5 minutes',
        subtitle: 'Pas besoin de rendez-vous ni de matériel spécial',
        step1: { title: 'Questionnaire', desc: 'Parlez-nous de votre pratique : route, VTT, gravel ? Vos douleurs éventuelles, vos objectifs.' },
        step2: { title: 'Capture', desc: 'Webcam en direct, vidéo ou simple photo — choisissez votre méthode. Notre IA analyse vos angles en quelques secondes.' },
        step3: { title: 'Réglages', desc: 'Hauteur de selle, recul, cintre... Recevez des recommandations chiffrées et expliquées.' },
      },
      angles: {
        title: 'Les angles qui comptent',
        description: 'Notre analyse mesure les 4 angles clés pour une position optimale. Chaque degré compte pour votre confort et votre puissance.',
        realtime: 'Analyse en temps réel',
        knee: { label: 'Extension genou', range: '140-150°', tip: 'En bas de pédalage' },
        hip: { label: 'Angle hanche', range: '55-70°', tip: 'Ouverture du bassin' },
        back: { label: 'Inclinaison dos', range: '35-50°', tip: 'Selon votre pratique' },
        arm: { label: 'Angle bras', range: '150-165°', tip: 'Légèrement fléchis' },
      },
      cycling: {
        title: 'Pour tous les cyclistes',
        types: ['Route', 'VTT', 'Gravel', 'Triathlon', 'Ville', 'Home trainer'],
      },
      faq: {
        title: 'Questions fréquentes',
        q1: { q: 'C\'est vraiment gratuit ?', a: 'Oui, 100% gratuit. Pas de compte à créer, pas de carte bancaire. Vos données restent sur votre appareil.' },
        q2: { q: 'De quoi ai-je besoin ?', a: 'Un ordinateur ou téléphone, et votre vélo. Utilisez la webcam en direct, importez une vidéo, ou prenez une simple photo de profil (côté droit). Idéalement sur home trainer.' },
        q3: { q: 'Est-ce aussi fiable qu\'un bikefitter pro ?', a: 'C\'est une excellente première analyse. Pour les problèmes complexes ou douleurs persistantes, un professionnel reste recommandé. MyBikeFitting vous donne une base solide.' },
        q4: { q: 'Ça marche avec quel type de vélo ?', a: 'Route, VTT, gravel, ville, triathlon... L\'analyse fonctionne avec tous les types de vélos.' },
      },
      story: {
        title: 'Pourquoi j\'ai créé MyBikeFitting',
        paragraph1: 'Après des mois de douleurs aux genoux à chaque sortie vélo, j\'ai cherché des solutions. Les rendez-vous chez les bikefitters étaient chers et compliqués à obtenir.',
        paragraph2: 'J\'ai passé des heures sur YouTube à comprendre comment ajuster ma selle. Essai, erreur, essai... Jusqu\'à trouver la bonne position.',
        paragraph3: 'Aujourd\'hui, cette expérience est automatisée. L\'IA fait en 5 minutes ce qui m\'a pris des semaines.',
        signature: 'Elouan',
        role: 'Cycliste & Créateur de MyBikeFitting',
      },
      cta: {
        title: 'Prêt pour votre prochaine sortie ?',
        description: '5 minutes pour optimiser votre position.',
        description2: 'Des heures de confort en plus sur le vélo.',
        button: 'Commencer l\'analyse gratuite',
      },
      privacy: {
        title: 'Vos données restent privées',
        subtitle: 'Traitement 100% local, aucune donnée envoyée',
        items: {
          local: {
            title: 'Traitement local',
            desc: 'Votre vidéo est analysée directement sur votre appareil',
          },
          noUpload: {
            title: 'Aucun envoi',
            desc: 'Vos images et vidéos ne quittent jamais votre navigateur',
          },
        },
      },
      stats: {
        analyses: 'analyses réalisées',
        rating: 'note moyenne',
        reviews: 'avis',
      },
      captureGuide: {
        title: 'Comment réussir votre capture',
        subtitle: 'Suivez ces conseils pour une analyse précise',
        tips: {
          side: {
            title: 'Vue de côté',
            desc: 'Placez la caméra perpendiculaire à votre vélo, à hauteur de selle. Le côté droit (pédalier visible) est idéal.',
          },
          lighting: {
            title: 'Bon éclairage',
            desc: 'Privilégiez la lumière naturelle ou un éclairage uniforme. Évitez le contre-jour et les ombres marquées.',
          },
          clothing: {
            title: 'Tenue ajustée',
            desc: 'Portez des vêtements près du corps (cuissard, maillot cycliste) pour une détection précise des articulations.',
          },
          distance: {
            title: 'Distance adaptée',
            desc: 'Le vélo et le cycliste doivent être visibles en entier, avec un peu de marge autour.',
          },
          pedal: {
            title: 'Position pédale',
            desc: 'Pour l\'analyse, placez la pédale au point mort bas (6h). C\'est là que l\'extension du genou est mesurée.',
          },
          stable: {
            title: 'Support stable',
            desc: 'Utilisez un home trainer si possible. Sinon, appuyez-vous contre un mur ou demandez de l\'aide.',
          },
        },
      },
      methodology: {
        title: 'Méthodologie scientifique',
        subtitle: 'Nos plages angulaires sont basées sur la littérature scientifique et les pratiques professionnelles en bikefitting',
        angles: {
          knee: {
            title: 'Extension du genou (140-150°)',
            desc: 'Mesuré au point mort bas, cet angle détermine la hauteur de selle optimale. La méthode Holmes recommande 25-35° de flexion par rapport à l\'extension complète.',
            consequence: 'Trop bas = douleurs aux genoux, trop haut = bascule du bassin',
          },
          hip: {
            title: 'Angle de hanche (55-70°)',
            desc: 'L\'ouverture minimale entre le fémur et le torse au point mort haut. Cet angle influence le confort et la puissance.',
            consequence: 'Trop fermé = compression artère iliaque, limitation respiratoire',
          },
          back: {
            title: 'Inclinaison du dos (35-50°)',
            desc: 'L\'angle entre le dos et l\'horizontale varie selon le type de pratique : 40-50° pour l\'endurance, 30-45° pour la route performance.',
            consequence: 'Plus l\'angle est faible, plus la position est aérodynamique mais exigeante',
          },
          arm: {
            title: 'Angle des bras (150-165°)',
            desc: 'Les bras légèrement fléchis (~20° de flexion) permettent d\'absorber les vibrations et gardent les épaules relâchées.',
            consequence: 'Bras tendus = tension cervicale, engourdissement des mains',
          },
        },
        sources: {
          title: 'Sources',
          references: [
            'Holmes JC, Pruitt AL, Whalen NJ. (1994). Lower extremity overuse in bicycling. Clinics in Sports Medicine.',
            'Millour G, et al. (2020). Comparison of static and dynamic methods based on knee kinematics.',
            'Bini RR, et al. (2011). Effects of saddle height on pedal force effectiveness.',
            'Ferrer-Roca V, et al. (2014). Saddle height effects on pedal forces and kinematics.',
          ],
          disclaimer: 'Ces valeurs sont des références générales. Une analyse professionnelle reste recommandée pour les cas complexes.',
        },
        externalLink: {
          text: 'Pour les problèmes persistants, consultez un',
          linkText: 'bikefitter certifié IBFI',
          url: 'https://www.ibfi-certification.com/',
        },
      },
    },

    // Newsletter
    newsletter: {
      title: 'Restez informé',
      subtitle: 'Recevez nos conseils vélo et les nouvelles fonctionnalités',
      placeholder: 'Votre email',
      button: 'S\'inscrire',
      promise: 'Pas de spam, promis. Maximum 2 emails par mois.',
      success: 'Merci ! Vous êtes inscrit.',
      error: 'Une erreur est survenue. Réessayez.',
      invalid: 'Email invalide',
    },

    // Email popup
    emailPopup: {
      title: 'Accès gratuit à vie',
      subtitle: 'Inscrivez-vous pour garder un accès gratuit et être informé des évolutions majeures.',
      placeholder: 'Votre email',
      button: 'M\'inscrire',
      noSpam: 'Pas de spam, uniquement les nouveautés importantes.',
      success: 'Merci ! Vous êtes inscrit.',
      later: 'Plus tard',
    },

    // Language modal
    languageModal: {
      title: 'Choisissez votre langue',
      subtitle: 'Sélectionnez la langue pour continuer',
    },

    // Evaluation page
    evaluation: {
      title: "Choisissez votre type d'évaluation",
      subtitle: "Sélectionnez le type d'évaluation qui correspond à vos besoins",
      recommended: 'Recommandé',
      duration: 'Durée',
      choose: 'Choisir',
      options: {
        quiz: {
          title: 'Quiz Interactif',
          description: 'Répondez à des questions sur votre expérience, vos objectifs et vos éventuelles douleurs pour obtenir un profil cycliste personnalisé.',
          duration: '5-10 min',
        },
        mobility: {
          title: 'Test de Mobilité',
          description: 'Évaluez votre flexibilité et votre mobilité articulaire grâce à des exercices guidés.',
          duration: '5-10 min',
        },
        complete: {
          title: 'Évaluation Complète',
          description: 'Combinez le quiz et le test de mobilité pour une analyse approfondie et des recommandations plus précises.',
          duration: '15-25 min',
        },
      },
      skipToAnalysis: 'Passer directement à l\'analyse vidéo',
    },

    // Quiz page
    quiz: {
      title: 'Quiz Cycliste',
      question: 'Question',
      finish: 'Terminer le quiz',
      autoSaved: 'Progression sauvegardée automatiquement',
    },

    // Quiz questions
    quizQuestions: {
      experience: {
        question: 'Quel est votre niveau d\'expérience en cyclisme ?',
        options: [
          { value: 'beginner', label: 'Débutant (moins de 1 an)' },
          { value: 'intermediate', label: 'Intermédiaire (1-3 ans)' },
          { value: 'advanced', label: 'Avancé (3-5 ans)' },
          { value: 'expert', label: 'Expert (plus de 5 ans)' },
        ],
      },
      practiceType: {
        question: 'Quel(s) type(s) de cyclisme pratiquez-vous ?',
        options: [
          { value: 'road', label: 'Route' },
          { value: 'mtb', label: 'VTT' },
          { value: 'gravel', label: 'Gravel' },
          { value: 'urban', label: 'Urbain/Vélotaf' },
          { value: 'triathlon', label: 'Triathlon' },
        ],
      },
      objectives: {
        question: 'Quels sont vos objectifs principaux ?',
        options: [
          { value: 'comfort', label: 'Améliorer le confort' },
          { value: 'performance', label: 'Améliorer la performance' },
          { value: 'endurance', label: 'Augmenter l\'endurance' },
          { value: 'painRelief', label: 'Réduire les douleurs' },
          { value: 'aerodynamics', label: 'Optimiser l\'aérodynamisme' },
        ],
      },
      painPoints: {
        question: 'Avez-vous des douleurs lors de vos sorties ?',
        options: [
          { value: 'none', label: 'Aucune douleur' },
          { value: 'back', label: 'Dos' },
          { value: 'neck', label: 'Nuque/Cou' },
          { value: 'knees', label: 'Genoux' },
          { value: 'hands', label: 'Mains/Poignets' },
          { value: 'feet', label: 'Pieds' },
          { value: 'buttocks', label: 'Fesses/Assise' },
          { value: 'shoulders', label: 'Épaules' },
        ],
      },
      weeklyHours: {
        question: 'Combien d\'heures par semaine passez-vous sur le vélo ?',
        options: [
          { value: 'less3', label: 'Moins de 3h' },
          { value: '3to5', label: '3-5h' },
          { value: '5to10', label: '5-10h' },
          { value: '10to15', label: '10-15h' },
          { value: 'more15', label: 'Plus de 15h' },
        ],
      },
      height: {
        question: 'Quelle est votre taille ?',
      },
      inseam: {
        question: 'Quelle est la longueur de votre entrejambe ?',
        hint: 'Mesurez la distance du sol à l\'entrejambe, pieds nus, en position debout.',
      },
    },

    // Mobility test page
    mobilityTest: {
      title: 'Test de Mobilité',
      test: 'Test',
      start: 'Commencer le test',
      skip: 'Passer ce test',
      instructions: 'Instructions',
      performMovement: 'Effectuez le mouvement et évaluez votre mobilité',
      doMovement: 'Effectuez le mouvement',
      rateYourMobility: 'Comment évaluez-vous votre mobilité ?',
      ratings: {
        limited: 'Limité',
        average: 'Moyen',
        good: 'Bon',
        excellent: 'Excellent',
      },
      tests: {
        hamstring: {
          name: 'Flexibilité des ischio-jambiers',
          description: 'Évaluez la souplesse de l\'arrière de vos cuisses',
          instructions: [
            'Tenez-vous debout, jambes tendues',
            'Penchez-vous en avant en essayant de toucher vos orteils',
            'Gardez les genoux droits',
            'Maintenez la position 5 secondes',
          ],
        },
        hip: {
          name: 'Mobilité des hanches',
          description: 'Testez l\'amplitude de mouvement de vos hanches',
          instructions: [
            'Allongez-vous sur le dos',
            'Amenez un genou vers votre poitrine',
            'Gardez l\'autre jambe tendue au sol',
            'Alternez les deux côtés',
          ],
        },
        back: {
          name: 'Flexibilité du dos',
          description: 'Évaluez la mobilité de votre colonne vertébrale',
          instructions: [
            'Mettez-vous à quatre pattes',
            'Arrondissez le dos vers le haut (dos de chat)',
            'Puis creusez le dos vers le bas',
            'Répétez 5 fois lentement',
          ],
        },
        shoulder: {
          name: 'Rotation des épaules',
          description: 'Testez la mobilité de vos épaules',
          instructions: [
            'Levez un bras au-dessus de la tête',
            'Pliez le coude pour toucher votre dos',
            'De l\'autre main, passez derrière le dos',
            'Essayez de joindre vos mains',
          ],
        },
      },
    },

    // Bike Analysis
    bikeAnalysis: {
      title: 'Analyse de votre position',
      subtitle: 'Capturez votre position sur le vélo pour une analyse personnalisée',
      // Method selection
      methodSelectTitle: 'Analyse de position',
      methodSelectDesc: 'Choisissez votre méthode de capture',
      recommended: 'Recommandé',
      webcamOption: 'Webcam en direct',
      webcamDesc: 'Analyse en temps réel avec retardateur',
      videoOption: 'Importer une vidéo',
      videoOptionDesc: 'Uploadez une vidéo existante pour analyse automatique',
      photoOption: 'Importer une photo',
      photoOptionDesc: 'Analyse instantanée d\'une photo de profil',
      highPrecision: 'Haute précision',
      goodPrecision: 'Bonne précision',
      lessPrecise: 'Moins précis',
      multiFrame: 'Multi-frames',
      singleFrame: 'Image unique',
      // Intro
      introTitle: 'Analyse de votre position',
      introDesc: 'Nous allons capturer votre position sur le vélo. Choisissez votre temps de préparation pour vous installer.',
      howItWorks: 'Comment ça marche :',
      step1: 'Placez votre téléphone/ordinateur à 2-3m, de profil',
      step2: 'Choisissez le délai et cliquez sur "Démarrer"',
      step3: 'Montez sur le vélo et pédalez normalement',
      step4: 'Pédalez 2 tours complets pour la capture',
      startAnalysis: "Commencer l'analyse",
      preparation: 'Préparation',
      loadingCamera: 'Chargement de la caméra et du modèle...',
      cameraReady: 'Caméra prête ! Positionnez-vous et lancez le retardateur.',
      positioning: 'Positionnement :',
      positionTip1: 'Placez-vous de profil face à la caméra',
      positionTip2: 'Distance : 2-3 mètres, caméra à hauteur de selle',
      positionTip3: 'Bon éclairage (pas de contre-jour)',
      countdownDelayLabel: 'Temps avant capture :',
      alignWithSilhouette: 'Alignez-vous avec la silhouette',
      startTimer: 'Démarrer le retardateur',
      getReady: 'Préparez-vous !',
      mountBike: 'Montez sur le vélo et pédalez',
      capturing: 'Capture en cours',
      pedalOneCycle: 'Pédalez à rythme régulier',
      cycles: 'tours',
      results: "Résultats de l'analyse",
      knee: 'Genou (extension)',
      hip: 'Hanche',
      back: 'Dos (inclinaison)',
      arm: 'Bras',
      ideal: 'Idéal',
      noData: 'Aucune donnée capturée',
      redoAnalysis: "Refaire l'analyse",
      viewRecommendations: 'Voir les recommandations',
      // Upload options
      orUpload: 'Ou importez votre propre média :',
      uploadPhoto: 'Importer une photo',
      uploadVideo: 'Importer une vidéo',
      photoAnalysis: 'Analyse de photo',
      videoAnalysis: 'Analyse de vidéo',
      selectPhoto: 'Sélectionnez une photo de votre position',
      selectVideo: 'Sélectionnez une vidéo de votre pédalage',
      photoHint: 'Photo de profil sur le vélo, côté gauche visible',
      videoHint: 'Vidéo de 10-30 secondes, pédalant normalement',
      analyzing: 'Analyse en cours...',
      analyzingFrame: 'Analyse de la frame',
      of: 'sur',
      noPoseDetected: 'Aucune pose détectée. Essayez un autre fichier.',
      notVisible: 'Non visible',
      useResults: 'Utiliser ces résultats',
      chooseDifferent: 'Choisir un autre fichier',
      dragDrop: 'Glissez-déposez ou cliquez pour sélectionner',
      // Camera loading
      loadingCameraShort: 'Chargement de la caméra...',
      // Analysis steps
      steps: {
        loadingImage: 'Chargement de l\'image...',
        loadingModel: 'Initialisation de l\'IA...',
        detecting: 'Détection de la pose...',
        calculating: 'Calcul des angles...',
        loadingVideo: 'Chargement de la vidéo...',
        preparingFile: 'Préparation du fichier',
        loadingMediaPipe: 'Chargement du modèle MediaPipe',
        finalizing: 'Finalisation de l\'analyse...',
      },
      // Angle labels
      angleLabels: {
        knee: 'Genou',
        hip: 'Hanche',
        back: 'Dos',
        arm: 'Bras',
      },
      // Video analysis
      framesAnalyzed: 'frames analysées',
      kneeExtensionDetected: 'Extension genou détectée',
      framesWithPose: 'frames avec pose détectée',
      selectingBest: 'Sélection des meilleurs angles...',
      // PoseDetector
      accessingCamera: 'Accès à la caméra...',
      startingVideo: 'Démarrage de la vidéo...',
      cameraError: 'Impossible d\'accéder à la caméra. Vérifiez les permissions.',
      retry: 'Réessayer',
      switchCamera: 'Changer de caméra',
    },

    // Recommendations
    recommendations: {
      title: 'Vos recommandations personnalisées',
      basedOn: 'Basées sur vos réponses au quiz',
      andAnalysis: "et l'analyse de votre position",
      summary: "Résumé de l'analyse",
      loading: 'Génération des recommandations...',
      excellent: 'Excellente position !',
      optimalPosition: 'Votre position semble optimale. Continuez ainsi !',
      redoAnalysis: "Refaire l'analyse",
      newEvaluation: 'Nouvelle évaluation',
      exportPDF: 'Recevoir mon rapport',
      exporting: 'Envoi en cours...',
      exportError: "Erreur lors de l'envoi",
      emailPlaceholder: 'Votre email',
      emailSent: 'Rapport envoyé !',
      emailSentDesc: 'Consultez votre boîte mail',
      sendReport: 'Envoyer',
      reportPromo: 'Recevez votre rapport PDF + des conseils pour aller plus loin',
      freeForever: 'Accès gratuit à vie garanti, même si le service devient payant',
      pdfRecommendations: 'Recommandations',
      pdfGeneratedBy: 'Généré par MyBikeFitting - mybikefitting.com',
      priority: {
        high: 'Priorité haute',
        medium: 'Priorité moyenne',
        low: 'Priorité basse',
      },
      current: 'Actuel',
      recommended: 'Recommandé',
      adjustment: 'Ajustement',
      directions: {
        up: 'Monter',
        down: 'Descendre',
        forward: 'Avancer',
        backward: 'Reculer',
        shorter: 'Raccourcir',
        longer: 'Allonger',
      },
      photoLimitationHint: 'Pour un ajustement précis en cm, utilisez l\'analyse vidéo ou webcam',
      viewLarger: 'Voir en grand',
      clickToClose: 'Cliquez pour fermer',
      angles: {
        knee: 'Genou',
        hip: 'Hanche',
        back: 'Dos',
        arm: 'Bras',
      },
      angleStatus: {
        optimal: 'Optimal',
        warning: 'À ajuster',
        bad: 'À corriger',
      },
      adjustmentsRecommended: 'Ajustements recommandés :',
      items: {
        saddleHeightLow: 'Augmenter la hauteur de selle',
        saddleHeightLowDesc: 'Votre extension du genou est trop faible. Une selle trop basse peut causer des douleurs au genou.',
        saddleHeightHigh: 'Diminuer la hauteur de selle',
        saddleHeightHighDesc: 'Votre extension du genou est trop importante. Une selle trop haute peut causer un balancement du bassin.',
        saddleSetback: 'Ajuster le recul de selle',
        saddleSetbackDesc: 'Votre angle de hanche est trop fermé. Cela peut limiter la puissance et causer des douleurs.',
        handlebarHeightLow: 'Relever le cintre',
        handlebarHeightLowDesc: 'Votre position est trop agressive. Cela peut causer des douleurs au cou et au dos.',
        handlebarHeightHigh: 'Abaisser le cintre',
        handlebarHeightHighDesc: 'Votre position est trop relevée. Cela peut réduire l\'aérodynamisme.',
        stemLength: 'Potence trop courte',
        stemLengthDesc: 'Vos bras sont trop pliés. Considérez une potence plus longue.',
        painKnees: 'Douleurs aux genoux',
        painKneesDesc: 'Vérifiez la hauteur de selle et la position des cales.',
        painBack: 'Douleurs au dos',
        painBackDesc: 'Essayez une position plus relevée. Renforcez votre gainage.',
        painNeck: 'Douleurs à la nuque',
        painNeckDesc: 'Position trop agressive. Relevez le cintre.',
        painHands: 'Engourdissement des mains',
        painHandsDesc: 'Trop de poids sur les mains. Vérifiez l\'inclinaison du cintre.',
        painFeet: 'Douleurs aux pieds',
        painFeetDesc: 'Vérifiez le positionnement de vos cales et la largeur de vos chaussures.',
        beginnerPosition: 'Position confort recommandée',
        beginnerPositionDesc: 'En tant que débutant, privilégiez une position plus relevée.',
      },
    },

    // Angles
    angles: {
      knee: 'Genou',
      hip: 'Hanche',
      back: 'Dos',
      arm: 'Bras',
    },

    // Feedback
    feedback: {
      title: 'Votre avis compte !',
      subtitle: 'Comment s\'est passée votre analyse ?',
      placeholder: 'Un commentaire ? (optionnel)',
      submit: 'Envoyer',
      skip: 'Passer',
      thanks: 'Merci pour votre retour !',
    },

    // Footer
    footer: {
      tagline: 'Optimisez votre position cycliste',
      navigation: 'Navigation',
      startEvaluation: 'Commencer',
      quiz: 'Quiz',
      analysis: 'Analyse',
      legal: 'Informations légales',
      cgu: "Conditions d'utilisation",
      privacy: 'Politique de confidentialité',
      mentions: 'Mentions légales',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
    },

    // 404 Page
    notFound: {
      title: 'Page non trouvée',
      message: "La page que vous recherchez n'existe pas ou a été déplacée.",
      backHome: "Retour à l'accueil",
      startEvaluation: "Commencer l'évaluation",
    },

    // Cookies
    cookies: {
      message: 'Ce site utilise des cookies pour améliorer votre expérience. Vos données restent sur votre appareil.',
      learnMore: 'En savoir plus',
      accept: 'Accepter',
      decline: 'Refuser',
    },

    // Legal pages
    legal: {
      cgu: {
        title: "Conditions Générales d'Utilisation",
        lastUpdate: 'Dernière mise à jour',
        sections: {
          acceptance: {
            title: "Acceptation des conditions",
            content: "En utilisant MyBikeFitting, vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce service.",
          },
          service: {
            title: 'Description du service',
            content: "MyBikeFitting est un outil d'analyse de position cycliste utilisant la détection de pose par webcam. Le service fournit des recommandations personnalisées basées sur l'analyse de vos angles articulaires et vos réponses au questionnaire.",
          },
          usage: {
            title: 'Utilisation du service',
            content: "Vous vous engagez à utiliser ce service uniquement à des fins personnelles et non commerciales. L'utilisation de la caméra nécessite votre consentement explicite.",
          },
          data: {
            title: 'Données personnelles',
            content: "Toutes vos données sont stockées localement sur votre appareil (localStorage). Aucune donnée n'est transmise à nos serveurs. Les images de la caméra sont traitées en temps réel et ne sont jamais enregistrées.",
          },
          liability: {
            title: 'Limitation de responsabilité',
            content: "MyBikeFitting fournit des recommandations à titre indicatif uniquement. Ces recommandations ne remplacent pas l'avis d'un professionnel du bikefitting. Nous déclinons toute responsabilité en cas de blessure résultant de l'application de ces recommandations.",
          },
          modifications: {
            title: 'Modifications',
            content: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.",
          },
        },
      },
      privacy: {
        title: 'Politique de Confidentialité',
        lastUpdate: 'Dernière mise à jour',
        sections: {
          collection: {
            title: 'Données collectées',
            content: "MyBikeFitting collecte uniquement les données que vous fournissez volontairement : réponses au questionnaire (niveau, objectifs, douleurs) et mesures corporelles (taille, entrejambe).",
          },
          camera: {
            title: 'Utilisation de la caméra',
            content: "L'accès à la caméra est utilisé uniquement pour l'analyse de votre position en temps réel. Les images ne sont jamais enregistrées ni transmises. Le traitement s'effectue entièrement sur votre appareil grâce à la technologie MediaPipe.",
          },
          storage: {
            title: 'Stockage des données',
            content: "Toutes vos données sont stockées localement dans le localStorage de votre navigateur. Aucune donnée n'est envoyée à des serveurs externes. Vous pouvez supprimer ces données à tout moment en effaçant les données de navigation.",
          },
          cookies: {
            title: 'Cookies',
            content: "MyBikeFitting utilise uniquement des cookies techniques essentiels pour mémoriser vos préférences de langue et votre consentement cookies. Aucun cookie de suivi ou publicitaire n'est utilisé.",
          },
          rights: {
            title: 'Vos droits',
            content: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Comme vos données sont stockées localement, vous pouvez les supprimer directement depuis les paramètres de votre navigateur.",
          },
          contact: {
            title: 'Contact',
            content: 'Pour toute question concernant vos données personnelles, contactez-nous à : contact@mybikefitting.com',
          },
        },
      },
      mentions: {
        title: 'Mentions Légales',
        sections: {
          editor: {
            title: 'Éditeur du site',
            name: 'Nom',
            status: 'Statut',
            statusValue: 'Projet personnel',
            email: 'Email',
          },
          hosting: {
            title: 'Hébergement',
            provider: 'Hébergeur',
            address: 'Adresse',
          },
          ip: {
            title: 'Propriété intellectuelle',
            content: "L'ensemble du contenu de ce site (textes, images, code) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.",
          },
          credits: {
            title: 'Crédits',
            mediapipe: 'Détection de pose : MediaPipe (Google)',
            nextjs: 'Framework : Next.js (Vercel)',
          },
        },
      },
    },

    // Errors
    errors: {
      cameraAccessDenied: "Accès à la caméra refusé. Autorisez l'accès dans votre navigateur.",
      noCamera: 'Aucune caméra détectée.',
      initError: "Impossible d'initialiser la détection.",
    },

    // Suggestions
    suggestions: {
      title: 'Vos idées',
      subtitle: 'Proposez des améliorations ou votez pour les idées existantes',
      cta: 'Une idée ? Proposez-la !',
      newIdea: 'Proposer une idée',
      ideaTitle: 'Titre de votre idée',
      ideaDescription: 'Description (optionnel)',
      yourEmail: 'Votre email',
      submit: 'Envoyer',
      submitting: 'Envoi...',
      success: 'Merci pour votre suggestion !',
      error: 'Une erreur est survenue',
      vote: 'Voter',
      votes: 'votes',
      noSuggestions: 'Aucune suggestion pour le moment. Soyez le premier !',
      emailHint: 'Pour vous tenir informé de l\'avancement',
      status: {
        pending: 'En attente',
        planned: 'Prévu',
        inProgress: 'En cours',
        done: 'Terminé',
      },
    },

    // Cleat positioning
    cleatPositioning: {
      title: 'Positionnement des cales',
      subtitle: 'Guide pour bien positionner vos cales de chaussures',
      intro: 'Un bon positionnement des cales est essentiel pour éviter les douleurs aux genoux et optimiser votre pédalage.',
      steps: {
        step1: {
          title: 'Trouvez la boule de pied',
          description: 'La tête du premier métatarse (boule de pied) doit être au-dessus de l\'axe de la pédale. Marquez ce point sur le côté de votre chaussure.',
        },
        step2: {
          title: 'Positionnez la cale avant/arrière',
          description: 'Alignez le centre de la cale avec le repère que vous avez fait. Si vous avez des douleurs au genou avant, reculez légèrement la cale.',
        },
        step3: {
          title: 'Ajustez la rotation',
          description: 'Asseyez-vous et laissez pendre vos pieds naturellement. La cale doit permettre à votre pied de conserver cette orientation naturelle.',
        },
        step4: {
          title: 'Position médiale/latérale',
          description: 'Vos genoux doivent rester alignés pendant le pédalage. Si vos genoux partent vers l\'extérieur, rapprochez les cales du bord interne de la chaussure.',
        },
      },
      tips: {
        title: 'Conseils importants',
        tip1: 'Serrez les vis progressivement et de manière égale',
        tip2: 'Faites un test court après chaque ajustement',
        tip3: 'Ajustez par petits incréments (2-3mm max)',
        tip4: 'Un inconfort peut mettre plusieurs sorties à se manifester',
      },
      painGuide: {
        title: 'Guide des douleurs',
        frontKnee: {
          title: 'Douleur avant du genou',
          solution: 'Cale trop avancée → Reculez la cale',
        },
        backKnee: {
          title: 'Douleur arrière du genou',
          solution: 'Cale trop reculée → Avancez la cale',
        },
        insideKnee: {
          title: 'Douleur intérieur du genou',
          solution: 'Pied trop vers l\'extérieur → Tournez la cale vers l\'intérieur',
        },
        outsideKnee: {
          title: 'Douleur extérieur du genou',
          solution: 'Pied trop vers l\'intérieur → Tournez la cale vers l\'extérieur',
        },
      },
      backToResults: 'Retour aux résultats',
    },
  },

  en: {
    // Common
    loading: 'Loading...',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    skip: 'Skip',
    retry: 'Retry',
    choose: 'Choose',
    start: 'Start',
    finish: 'Finish',
    cancel: 'Cancel',
    recommended: 'Recommended',
    duration: 'Duration',

    // Breadcrumb
    breadcrumb: {
      evaluation: 'Evaluation',
      quiz: 'Quiz',
      mobility: 'Mobility',
      analysis: 'Analysis',
      recommendations: 'Results',
    },

    // Home page
    home: {
      hero: {
        badge: 'Free bike fit · 5 minutes · No signup',
        titleLine1: 'Free Online',
        titleLine2: 'Bike Fitting',
        description: 'AI-powered bike fit analysis via webcam, video or photo. Detect causes of cycling pain (knee, back, neck) and get saddle height, setback and handlebar recommendations.',
        cta: 'Start free bike fit',
        resumeAnalysis: 'Resume my analysis',
        howItWorks: 'How it works',
        analysisChoice: {
          title: 'Analysis already exists',
          description: 'You have already completed an analysis. What would you like to do?',
          viewResults: 'View my results',
          startNew: 'New analysis',
        },
      },
      preview: {
        analyzing: 'Analyzing...',
        kneeExtension: 'Knee extension',
        hipAngle: 'Hip angle',
        backAngle: 'Back angle',
        armAngle: 'Arm angle',
        recommendation: 'Recommendation',
        saddleAdjust: 'Saddle +2cm',
      },
      painPoints: {
        title: 'Cycling pain? You\'re not alone',
        knee: { title: 'Knee pain cycling', desc: 'Cause #1: incorrect saddle height. Our bike fit analysis detects this issue.' },
        back: { title: 'Back pain cycling', desc: 'Often caused by wrong handlebar position or saddle setback.' },
        fatigue: { title: 'Hand numbness', desc: 'Too much weight on the front? Your back angle and stem length need checking.' },
        conclusion: 'In 80% of cases, it\'s a',
        position: 'bike fit problem',
      },
      steps: {
        title: '3 steps, 5 minutes',
        subtitle: 'No appointment or special equipment needed',
        step1: { title: 'Questionnaire', desc: 'Tell us about your practice: road, MTB, gravel? Any pain, your goals.' },
        step2: { title: 'Capture', desc: 'Live webcam, video upload, or a simple photo — choose your method. Our AI analyzes your angles in seconds.' },
        step3: { title: 'Adjustments', desc: 'Saddle height, setback, handlebars... Get detailed recommendations with numbers.' },
      },
      angles: {
        title: 'The angles that matter',
        description: 'Our analysis measures the 4 key angles for optimal position. Every degree counts for your comfort and power.',
        realtime: 'Real-time analysis',
        knee: { label: 'Knee extension', range: '140-150°', tip: 'At bottom of pedal stroke' },
        hip: { label: 'Hip angle', range: '55-70°', tip: 'Pelvis opening' },
        back: { label: 'Back angle', range: '35-50°', tip: 'Depends on your practice' },
        arm: { label: 'Arm angle', range: '150-165°', tip: 'Slightly bent' },
      },
      cycling: {
        title: 'For all cyclists',
        types: ['Road', 'MTB', 'Gravel', 'Triathlon', 'City', 'Indoor trainer'],
      },
      faq: {
        title: 'Frequently asked questions',
        q1: { q: 'Is it really free?', a: 'Yes, 100% free. No account to create, no credit card. Your data stays on your device.' },
        q2: { q: 'What do I need?', a: 'A computer or phone, and your bike. Use live webcam, upload a video, or take a simple photo from the side (right side). Ideally on an indoor trainer.' },
        q3: { q: 'Is it as reliable as a pro bikefitter?', a: 'It\'s an excellent first analysis. For complex issues or persistent pain, a professional is still recommended. MyBikeFitting gives you a solid foundation.' },
        q4: { q: 'What type of bike does it work with?', a: 'Road, MTB, gravel, city, triathlon... The analysis works with all bike types.' },
      },
      story: {
        title: 'Why I created MyBikeFitting',
        paragraph1: 'After months of knee pain on every ride, I searched for solutions. Appointments with bikefitters were expensive and hard to get.',
        paragraph2: 'I spent hours on YouTube learning how to adjust my saddle. Trial, error, trial... Until I found the right position.',
        paragraph3: 'Today, this experience is automated. AI does in 5 minutes what took me weeks.',
        signature: 'Elouan',
        role: 'Cyclist & Creator of MyBikeFitting',
      },
      cta: {
        title: 'Ready for your next ride?',
        description: '5 minutes to optimize your position.',
        description2: 'Hours of extra comfort on the bike.',
        button: 'Start free analysis',
      },
      privacy: {
        title: 'Your data stays private',
        subtitle: '100% local processing, no data sent',
        items: {
          local: {
            title: 'Local processing',
            desc: 'Your video is analyzed directly on your device',
          },
          noUpload: {
            title: 'No upload',
            desc: 'Your images and videos never leave your browser',
          },
        },
      },
      stats: {
        analyses: 'analyses completed',
        rating: 'average rating',
        reviews: 'reviews',
      },
      captureGuide: {
        title: 'How to capture properly',
        subtitle: 'Follow these tips for accurate analysis',
        tips: {
          side: {
            title: 'Side view',
            desc: 'Position the camera perpendicular to your bike at saddle height. The right side (chainring visible) works best.',
          },
          lighting: {
            title: 'Good lighting',
            desc: 'Use natural light or uniform lighting. Avoid backlighting and harsh shadows.',
          },
          clothing: {
            title: 'Fitted clothing',
            desc: 'Wear close-fitting clothes (cycling shorts, jersey) for accurate joint detection.',
          },
          distance: {
            title: 'Proper distance',
            desc: 'The entire bike and cyclist should be visible with some margin around.',
          },
          pedal: {
            title: 'Pedal position',
            desc: 'For analysis, place the pedal at bottom dead center (6 o\'clock). That\'s where knee extension is measured.',
          },
          stable: {
            title: 'Stable support',
            desc: 'Use a turbo trainer if possible. Otherwise, lean against a wall or have someone help.',
          },
        },
      },
      methodology: {
        title: 'Scientific methodology',
        subtitle: 'Our angle ranges are based on scientific literature and professional bike fitting practices',
        angles: {
          knee: {
            title: 'Knee extension (140-150°)',
            desc: 'Measured at bottom dead center, this angle determines optimal saddle height. The Holmes method recommends 25-35° flexion from full extension.',
            consequence: 'Too low = knee pain, too high = pelvis rocking',
          },
          hip: {
            title: 'Hip angle (55-70°)',
            desc: 'The minimum opening between thigh and torso at top dead center. This angle affects comfort and power output.',
            consequence: 'Too closed = iliac artery compression, breathing limitations',
          },
          back: {
            title: 'Back inclination (35-50°)',
            desc: 'The angle between back and horizontal varies by riding style: 40-50° for endurance, 30-45° for road performance.',
            consequence: 'Lower angles are more aero but more demanding',
          },
          arm: {
            title: 'Arm angle (150-165°)',
            desc: 'Slightly bent arms (~20° flexion) absorb vibrations and keep shoulders relaxed.',
            consequence: 'Straight arms = neck tension, hand numbness',
          },
        },
        sources: {
          title: 'References',
          references: [
            'Holmes JC, Pruitt AL, Whalen NJ. (1994). Lower extremity overuse in bicycling. Clinics in Sports Medicine.',
            'Millour G, et al. (2020). Comparison of static and dynamic methods based on knee kinematics.',
            'Bini RR, et al. (2011). Effects of saddle height on pedal force effectiveness.',
            'Ferrer-Roca V, et al. (2014). Saddle height effects on pedal forces and kinematics.',
          ],
          disclaimer: 'These are general reference values. Professional analysis is recommended for complex cases.',
        },
        externalLink: {
          text: 'For persistent issues, consult an',
          linkText: 'IBFI certified bike fitter',
          url: 'https://www.ibfi-certification.com/',
        },
      },
    },

    // Newsletter
    newsletter: {
      title: 'Stay informed',
      subtitle: 'Get our cycling tips and new features',
      placeholder: 'Your email',
      button: 'Subscribe',
      promise: 'No spam, we promise. Maximum 2 emails per month.',
      success: 'Thank you! You are subscribed.',
      error: 'An error occurred. Please try again.',
      invalid: 'Invalid email',
    },

    // Email popup
    emailPopup: {
      title: 'Free lifetime access',
      subtitle: 'Sign up to keep free access and be notified of major updates.',
      placeholder: 'Your email',
      button: 'Sign up',
      noSpam: 'No spam, only important news.',
      success: 'Thank you! You are subscribed.',
      later: 'Later',
    },

    // Language modal
    languageModal: {
      title: 'Choose your language',
      subtitle: 'Select your language to continue',
    },

    // Evaluation page
    evaluation: {
      title: 'Choose your evaluation type',
      subtitle: 'Select the evaluation type that matches your needs',
      recommended: 'Recommended',
      duration: 'Duration',
      choose: 'Choose',
      options: {
        quiz: {
          title: 'Interactive Quiz',
          description: 'Answer questions about your experience, goals and any pain to get a personalized cyclist profile.',
          duration: '5-10 min',
        },
        mobility: {
          title: 'Mobility Test',
          description: 'Evaluate your flexibility and joint mobility through guided exercises.',
          duration: '5-10 min',
        },
        complete: {
          title: 'Complete Evaluation',
          description: 'Combine the quiz and mobility test for an in-depth analysis and more precise recommendations.',
          duration: '15-25 min',
        },
      },
      skipToAnalysis: 'Skip directly to video analysis',
    },

    // Quiz page
    quiz: {
      title: 'Cyclist Quiz',
      question: 'Question',
      finish: 'Finish quiz',
      autoSaved: 'Progress automatically saved',
    },

    // Quiz questions
    quizQuestions: {
      experience: {
        question: 'What is your cycling experience level?',
        options: [
          { value: 'beginner', label: 'Beginner (less than 1 year)' },
          { value: 'intermediate', label: 'Intermediate (1-3 years)' },
          { value: 'advanced', label: 'Advanced (3-5 years)' },
          { value: 'expert', label: 'Expert (more than 5 years)' },
        ],
      },
      practiceType: {
        question: 'What type(s) of cycling do you practice?',
        options: [
          { value: 'road', label: 'Road' },
          { value: 'mtb', label: 'Mountain Bike' },
          { value: 'gravel', label: 'Gravel' },
          { value: 'urban', label: 'Urban/Commuting' },
          { value: 'triathlon', label: 'Triathlon' },
        ],
      },
      objectives: {
        question: 'What are your main objectives?',
        options: [
          { value: 'comfort', label: 'Improve comfort' },
          { value: 'performance', label: 'Improve performance' },
          { value: 'endurance', label: 'Increase endurance' },
          { value: 'painRelief', label: 'Reduce pain' },
          { value: 'aerodynamics', label: 'Optimize aerodynamics' },
        ],
      },
      painPoints: {
        question: 'Do you experience pain during rides?',
        options: [
          { value: 'none', label: 'No pain' },
          { value: 'back', label: 'Back' },
          { value: 'neck', label: 'Neck' },
          { value: 'knees', label: 'Knees' },
          { value: 'hands', label: 'Hands/Wrists' },
          { value: 'feet', label: 'Feet' },
          { value: 'buttocks', label: 'Buttocks/Saddle area' },
          { value: 'shoulders', label: 'Shoulders' },
        ],
      },
      weeklyHours: {
        question: 'How many hours per week do you spend on the bike?',
        options: [
          { value: 'less3', label: 'Less than 3h' },
          { value: '3to5', label: '3-5h' },
          { value: '5to10', label: '5-10h' },
          { value: '10to15', label: '10-15h' },
          { value: 'more15', label: 'More than 15h' },
        ],
      },
      height: {
        question: 'What is your height?',
      },
      inseam: {
        question: 'What is your inseam length?',
        hint: 'Measure the distance from the floor to your crotch, barefoot, standing.',
      },
    },

    // Mobility test page
    mobilityTest: {
      title: 'Mobility Test',
      test: 'Test',
      start: 'Start test',
      skip: 'Skip this test',
      instructions: 'Instructions',
      performMovement: 'Perform the movement and evaluate your mobility',
      doMovement: 'Perform the movement',
      rateYourMobility: 'How do you rate your mobility?',
      ratings: {
        limited: 'Limited',
        average: 'Average',
        good: 'Good',
        excellent: 'Excellent',
      },
      tests: {
        hamstring: {
          name: 'Hamstring Flexibility',
          description: 'Evaluate the flexibility of the back of your thighs',
          instructions: [
            'Stand with straight legs',
            'Bend forward trying to touch your toes',
            'Keep your knees straight',
            'Hold the position for 5 seconds',
          ],
        },
        hip: {
          name: 'Hip Mobility',
          description: 'Test the range of motion of your hips',
          instructions: [
            'Lie on your back',
            'Bring one knee to your chest',
            'Keep the other leg straight on the floor',
            'Alternate both sides',
          ],
        },
        back: {
          name: 'Back Flexibility',
          description: 'Evaluate the mobility of your spine',
          instructions: [
            'Get on all fours',
            'Arch your back upward (cat pose)',
            'Then hollow your back downward',
            'Repeat 5 times slowly',
          ],
        },
        shoulder: {
          name: 'Shoulder Rotation',
          description: 'Test the mobility of your shoulders',
          instructions: [
            'Raise one arm above your head',
            'Bend your elbow to touch your back',
            'With the other hand, reach behind your back',
            'Try to join your hands',
          ],
        },
      },
    },

    // Bike Analysis
    bikeAnalysis: {
      title: 'Position Analysis',
      subtitle: 'Capture your position on the bike for a personalized analysis',
      // Method selection
      methodSelectTitle: 'Position Analysis',
      methodSelectDesc: 'Choose your capture method',
      recommended: 'Recommended',
      webcamOption: 'Live Webcam',
      webcamDesc: 'Real-time analysis with countdown timer',
      videoOption: 'Import Video',
      videoOptionDesc: 'Upload an existing video for automatic analysis',
      photoOption: 'Import Photo',
      photoOptionDesc: 'Instant analysis of a profile photo',
      highPrecision: 'High precision',
      goodPrecision: 'Good precision',
      lessPrecise: 'Less precise',
      multiFrame: 'Multi-frame',
      singleFrame: 'Single image',
      // Intro
      introTitle: 'Position Analysis',
      introDesc: 'We will capture your position on the bike. Choose your preparation time to get set up.',
      howItWorks: 'How it works:',
      step1: 'Place your phone/computer 2-3m away, from the side',
      step2: 'Choose the delay and click "Start"',
      step3: 'Get on the bike and pedal normally',
      step4: 'Pedal 2 full rotations for capture',
      startAnalysis: 'Start Analysis',
      preparation: 'Preparation',
      loadingCamera: 'Loading camera and model...',
      cameraReady: 'Camera ready! Position yourself and start the timer.',
      positioning: 'Positioning:',
      positionTip1: 'Position yourself sideways facing the camera',
      positionTip2: 'Distance: 2-3 meters, camera at saddle height',
      positionTip3: 'Good lighting (no backlight)',
      countdownDelayLabel: 'Time before capture:',
      alignWithSilhouette: 'Align yourself with the silhouette',
      startTimer: 'Start timer',
      getReady: 'Get ready!',
      mountBike: 'Get on the bike and pedal',
      capturing: 'Capturing',
      pedalOneCycle: 'Pedal at a steady pace',
      cycles: 'rotations',
      results: 'Analysis Results',
      knee: 'Knee (extension)',
      hip: 'Hip',
      back: 'Back (angle)',
      arm: 'Arm',
      ideal: 'Ideal',
      noData: 'No data captured',
      redoAnalysis: 'Redo analysis',
      viewRecommendations: 'View recommendations',
      // Upload options
      orUpload: 'Or upload your own media:',
      uploadPhoto: 'Upload a photo',
      uploadVideo: 'Upload a video',
      photoAnalysis: 'Photo Analysis',
      videoAnalysis: 'Video Analysis',
      selectPhoto: 'Select a photo of your position',
      selectVideo: 'Select a video of your pedaling',
      photoHint: 'Side profile on the bike, left side visible',
      videoHint: 'Video of 10-30 seconds, pedaling normally',
      analyzing: 'Analyzing...',
      analyzingFrame: 'Analyzing frame',
      of: 'of',
      noPoseDetected: 'No pose detected. Try another file.',
      notVisible: 'Not visible',
      useResults: 'Use these results',
      chooseDifferent: 'Choose another file',
      dragDrop: 'Drag and drop or click to select',
      // Camera loading
      loadingCameraShort: 'Loading camera...',
      // Analysis steps
      steps: {
        loadingImage: 'Loading image...',
        loadingModel: 'Initializing AI...',
        detecting: 'Detecting pose...',
        calculating: 'Calculating angles...',
        loadingVideo: 'Loading video...',
        preparingFile: 'Preparing file',
        loadingMediaPipe: 'Loading MediaPipe model',
        finalizing: 'Finalizing analysis...',
      },
      // Angle labels
      angleLabels: {
        knee: 'Knee',
        hip: 'Hip',
        back: 'Back',
        arm: 'Arm',
      },
      // Video analysis
      framesAnalyzed: 'frames analyzed',
      kneeExtensionDetected: 'Knee extension detected',
      framesWithPose: 'frames with pose detected',
      selectingBest: 'Selecting best angles...',
      // PoseDetector
      accessingCamera: 'Accessing camera...',
      startingVideo: 'Starting video...',
      cameraError: 'Unable to access camera. Check permissions.',
      retry: 'Retry',
      switchCamera: 'Switch camera',
    },

    // Recommendations
    recommendations: {
      title: 'Your personalized recommendations',
      basedOn: 'Based on your quiz answers',
      andAnalysis: 'and your position analysis',
      summary: 'Analysis summary',
      loading: 'Generating recommendations...',
      excellent: 'Excellent position!',
      optimalPosition: 'Your position seems optimal. Keep it up!',
      redoAnalysis: 'Redo analysis',
      newEvaluation: 'New evaluation',
      exportPDF: 'Get my report',
      exporting: 'Sending...',
      exportError: 'Error sending email',
      emailPlaceholder: 'Your email',
      emailSent: 'Report sent!',
      emailSentDesc: 'Check your inbox',
      sendReport: 'Send',
      reportPromo: 'Receive your PDF report + tips to go further',
      freeForever: 'Free lifetime access guaranteed, even if the service becomes paid',
      pdfRecommendations: 'Recommendations',
      pdfGeneratedBy: 'Generated by MyBikeFitting - mybikefitting.com',
      priority: {
        high: 'High priority',
        medium: 'Medium priority',
        low: 'Low priority',
      },
      current: 'Current',
      recommended: 'Recommended',
      adjustment: 'Adjustment',
      directions: {
        up: 'Raise',
        down: 'Lower',
        forward: 'Move forward',
        backward: 'Move backward',
        shorter: 'Shorten',
        longer: 'Lengthen',
      },
      photoLimitationHint: 'For precise cm adjustment, use video or webcam analysis',
      viewLarger: 'View larger',
      clickToClose: 'Click to close',
      angles: {
        knee: 'Knee',
        hip: 'Hip',
        back: 'Back',
        arm: 'Arm',
      },
      angleStatus: {
        optimal: 'Optimal',
        warning: 'Needs adjustment',
        bad: 'Needs correction',
      },
      adjustmentsRecommended: 'Recommended adjustments:',
      items: {
        saddleHeightLow: 'Raise saddle height',
        saddleHeightLowDesc: 'Your knee extension is too low. A saddle too low can cause knee pain.',
        saddleHeightHigh: 'Lower saddle height',
        saddleHeightHighDesc: 'Your knee extension is too high. A saddle too high can cause hip rocking.',
        saddleSetback: 'Adjust saddle setback',
        saddleSetbackDesc: 'Your hip angle is too closed. This can limit power and cause pain.',
        handlebarHeightLow: 'Raise handlebars',
        handlebarHeightLowDesc: 'Your position is too aggressive. This can cause neck and back pain.',
        handlebarHeightHigh: 'Lower handlebars',
        handlebarHeightHighDesc: 'Your position is too upright. This can reduce aerodynamics.',
        stemLength: 'Stem too short',
        stemLengthDesc: 'Your arms are too bent. Consider a longer stem.',
        painKnees: 'Knee pain',
        painKneesDesc: 'Check saddle height and cleat position.',
        painBack: 'Back pain',
        painBackDesc: 'Try a more upright position. Strengthen your core.',
        painNeck: 'Neck pain',
        painNeckDesc: 'Position too aggressive. Raise the handlebars.',
        painHands: 'Hand numbness',
        painHandsDesc: 'Too much weight on hands. Check handlebar tilt.',
        painFeet: 'Foot pain',
        painFeetDesc: 'Check your cleat positioning and shoe width.',
        beginnerPosition: 'Comfort position recommended',
        beginnerPositionDesc: 'As a beginner, prioritize a more upright position.',
      },
    },

    // Angles (legacy)
    angles: {
      knee: 'Knee',
      hip: 'Hip',
      back: 'Back',
      arm: 'Arm',
    },

    // Feedback
    feedback: {
      title: 'Your feedback matters!',
      subtitle: 'How was your analysis experience?',
      placeholder: 'Any comments? (optional)',
      submit: 'Submit',
      skip: 'Skip',
      thanks: 'Thank you for your feedback!',
    },

    // Footer
    footer: {
      tagline: 'Optimize your cycling position',
      navigation: 'Navigation',
      startEvaluation: 'Get Started',
      quiz: 'Quiz',
      analysis: 'Analysis',
      legal: 'Legal Information',
      cgu: 'Terms of Service',
      privacy: 'Privacy Policy',
      mentions: 'Legal Notice',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },

    // 404 Page
    notFound: {
      title: 'Page not found',
      message: 'The page you are looking for does not exist or has been moved.',
      backHome: 'Back to home',
      startEvaluation: 'Start evaluation',
    },

    // Cookies
    cookies: {
      message: 'This site uses cookies to improve your experience. Your data stays on your device.',
      learnMore: 'Learn more',
      accept: 'Accept',
      decline: 'Decline',
    },

    // Legal pages
    legal: {
      cgu: {
        title: 'Terms of Service',
        lastUpdate: 'Last updated',
        sections: {
          acceptance: {
            title: 'Acceptance of Terms',
            content: 'By using MyBikeFitting, you agree to these terms of service. If you do not agree, please do not use this service.',
          },
          service: {
            title: 'Service Description',
            content: 'MyBikeFitting is a cycling position analysis tool using webcam pose detection. The service provides personalized recommendations based on your joint angles analysis and questionnaire responses.',
          },
          usage: {
            title: 'Service Usage',
            content: 'You agree to use this service for personal, non-commercial purposes only. Camera usage requires your explicit consent.',
          },
          data: {
            title: 'Personal Data',
            content: 'All your data is stored locally on your device (localStorage). No data is transmitted to our servers. Camera images are processed in real-time and never recorded.',
          },
          liability: {
            title: 'Limitation of Liability',
            content: 'MyBikeFitting provides recommendations for informational purposes only. These recommendations do not replace professional bike fitting advice. We disclaim any liability for injuries resulting from applying these recommendations.',
          },
          modifications: {
            title: 'Modifications',
            content: 'We reserve the right to modify these terms at any time. Changes take effect upon publication on the site.',
          },
        },
      },
      privacy: {
        title: 'Privacy Policy',
        lastUpdate: 'Last updated',
        sections: {
          collection: {
            title: 'Data Collection',
            content: 'MyBikeFitting only collects data you voluntarily provide: questionnaire responses (level, goals, pain points) and body measurements (height, inseam).',
          },
          camera: {
            title: 'Camera Usage',
            content: 'Camera access is used only for real-time position analysis. Images are never recorded or transmitted. Processing happens entirely on your device using MediaPipe technology.',
          },
          storage: {
            title: 'Data Storage',
            content: 'All your data is stored locally in your browser\'s localStorage. No data is sent to external servers. You can delete this data at any time by clearing your browser data.',
          },
          cookies: {
            title: 'Cookies',
            content: 'MyBikeFitting only uses essential technical cookies to remember your language preferences and cookie consent. No tracking or advertising cookies are used.',
          },
          rights: {
            title: 'Your Rights',
            content: 'Under GDPR, you have the right to access, rectify, and delete your data. Since your data is stored locally, you can delete it directly from your browser settings.',
          },
          contact: {
            title: 'Contact',
            content: 'For any questions about your personal data, contact us at: contact@mybikefitting.com',
          },
        },
      },
      mentions: {
        title: 'Legal Notice',
        sections: {
          editor: {
            title: 'Site Editor',
            name: 'Name',
            status: 'Status',
            statusValue: 'Personal project',
            email: 'Email',
          },
          hosting: {
            title: 'Hosting',
            provider: 'Provider',
            address: 'Address',
          },
          ip: {
            title: 'Intellectual Property',
            content: 'All content on this site (text, images, code) is protected by copyright. Any unauthorized reproduction is prohibited.',
          },
          credits: {
            title: 'Credits',
            mediapipe: 'Pose Detection: MediaPipe (Google)',
            nextjs: 'Framework: Next.js (Vercel)',
          },
        },
      },
    },

    // Errors
    errors: {
      cameraAccessDenied: 'Camera access denied. Allow access in your browser.',
      noCamera: 'No camera detected.',
      initError: 'Unable to initialize detection.',
    },

    // Suggestions
    suggestions: {
      title: 'Your ideas',
      subtitle: 'Suggest improvements or vote for existing ideas',
      cta: 'Have an idea? Suggest it!',
      newIdea: 'Suggest an idea',
      ideaTitle: 'Title of your idea',
      ideaDescription: 'Description (optional)',
      yourEmail: 'Your email',
      submit: 'Submit',
      submitting: 'Submitting...',
      success: 'Thank you for your suggestion!',
      error: 'An error occurred',
      vote: 'Vote',
      votes: 'votes',
      noSuggestions: 'No suggestions yet. Be the first!',
      emailHint: 'To keep you informed of progress',
      status: {
        pending: 'Pending',
        planned: 'Planned',
        inProgress: 'In progress',
        done: 'Done',
      },
    },

    // Cleat positioning
    cleatPositioning: {
      title: 'Cleat Positioning',
      subtitle: 'Guide to properly position your shoe cleats',
      intro: 'Proper cleat positioning is essential to prevent knee pain and optimize your pedaling.',
      steps: {
        step1: {
          title: 'Find the ball of your foot',
          description: 'The first metatarsal head (ball of foot) should be over the pedal spindle. Mark this point on the side of your shoe.',
        },
        step2: {
          title: 'Position the cleat fore/aft',
          description: 'Align the center of the cleat with the mark you made. If you have anterior knee pain, move the cleat slightly backward.',
        },
        step3: {
          title: 'Adjust rotation',
          description: 'Sit and let your feet hang naturally. The cleat should allow your foot to maintain this natural orientation.',
        },
        step4: {
          title: 'Medial/lateral position',
          description: 'Your knees should stay aligned during pedaling. If your knees move outward, move the cleats closer to the inside edge of the shoe.',
        },
      },
      tips: {
        title: 'Important tips',
        tip1: 'Tighten the screws gradually and evenly',
        tip2: 'Do a short test ride after each adjustment',
        tip3: 'Adjust in small increments (2-3mm max)',
        tip4: 'Discomfort may take several rides to appear',
      },
      painGuide: {
        title: 'Pain guide',
        frontKnee: {
          title: 'Front knee pain',
          solution: 'Cleat too far forward → Move cleat backward',
        },
        backKnee: {
          title: 'Back knee pain',
          solution: 'Cleat too far back → Move cleat forward',
        },
        insideKnee: {
          title: 'Inside knee pain',
          solution: 'Foot pointing too outward → Rotate cleat inward',
        },
        outsideKnee: {
          title: 'Outside knee pain',
          solution: 'Foot pointing too inward → Rotate cleat outward',
        },
      },
      backToResults: 'Back to results',
    },
  },

  de: {
    // Common
    loading: 'Wird geladen...',
    back: 'Zurück',
    next: 'Weiter',
    previous: 'Vorherige',
    skip: 'Überspringen',
    retry: 'Erneut versuchen',
    choose: 'Auswählen',
    start: 'Start',
    finish: 'Fertigstellen',
    cancel: 'Abbrechen',
    recommended: 'Empfohlen',
    duration: 'Dauer',

    // Breadcrumb
    breadcrumb: {
      evaluation: 'Analyse',
      quiz: 'Fragebogen',
      mobility: 'Mobilität',
      analysis: 'Analyse',
      recommendations: 'Ergebnisse',
    },

    // Home page
    home: {
      hero: {
        badge: 'Kostenloses Bikefitting · 5 Minuten · Ohne Anmeldung',
        titleLine1: 'Kostenloses Online',
        titleLine2: 'Bikefitting',
        description: 'KI-gestützte Bikefitting-Analyse per Webcam, Video oder Foto. Erkenne Ursachen für Schmerzen beim Radfahren (Knie, Rücken, Nacken) und erhalte Empfehlungen zu Sattelhöhe, Sattel-Offset und Lenkerposition.',
        cta: 'Kostenloses Bikefitting starten',
        resumeAnalysis: 'Meine Analyse fortsetzen',
        howItWorks: 'So funktioniert es',
        analysisChoice: {
          title: 'Analyse existiert bereits',
          description: 'Du hast bereits eine Analyse durchgeführt. Was möchtest du tun?',
          viewResults: 'Meine Ergebnisse ansehen',
          startNew: 'Neue Analyse',
        },
      },
      preview: {
        analyzing: 'Analyse läuft...',
        kneeExtension: 'Kniestreckung',
        hipAngle: 'Hüftwinkel',
        backAngle: 'Rückenwinkel',
        armAngle: 'Armwinkel',
        recommendation: 'Empfehlung',
        saddleAdjust: 'Sattel +2 cm',
      },
      painPoints: {
        title: 'Schmerzen beim Radfahren? Du bist nicht allein',
        knee: { title: 'Knieschmerzen beim Radfahren', desc: 'Ursache Nr. 1: falsche Sattelhöhe. Unsere Bikefitting-Analyse erkennt dieses Problem.' },
        back: { title: 'Rückenschmerzen beim Radfahren', desc: 'Oft verursacht durch falsche Lenkerposition oder Sattel-Offset.' },
        fatigue: { title: 'Taubheitsgefühl in den Händen', desc: 'Zu viel Gewicht vorne? Dein Rückenwinkel und die Vorbaulänge sollten geprüft werden.' },
        conclusion: 'In 80% der Fälle ist es ein',
        position: 'Bikefitting-Problem',
      },
      steps: {
        title: '3 Schritte, 5 Minuten',
        subtitle: 'Kein Termin und keine spezielle Ausrüstung nötig',
        step1: { title: 'Fragebogen', desc: 'Erzähl uns von deiner Fahrpraxis: Rennrad, MTB, Gravel? Deine Schmerzen und deine Ziele.' },
        step2: { title: 'Aufnahme', desc: 'Live-Webcam, Video-Upload oder ein einfaches Foto - wähle deine Methode. Unsere KI analysiert deine Winkel in Sekunden.' },
        step3: { title: 'Anpassungen', desc: 'Sattelhöhe, Sattel-Offset, Lenker... Erhalte detaillierte Empfehlungen mit Zahlen.' },
      },
      angles: {
        title: 'Die Winkel, die zählen',
        description: 'Unsere Analyse misst die 4 Schlüsselwinkel für eine optimale Position. Jeder Grad zählt für deinen Komfort und deine Leistung.',
        realtime: 'Analyse in Echtzeit',
        knee: { label: 'Kniestreckung', range: '140-150°', tip: 'Am unteren Totpunkt' },
        hip: { label: 'Hüftwinkel', range: '55-70°', tip: 'Beckenöffnung' },
        back: { label: 'Rückenwinkel', range: '35-50°', tip: 'Je nach Fahrstil' },
        arm: { label: 'Armwinkel', range: '150-165°', tip: 'Leicht gebeugt' },
      },
      cycling: {
        title: 'Für alle Radfahrer',
        types: ['Rennrad', 'MTB', 'Gravel', 'Triathlon', 'Stadt', 'Rollentrainer'],
      },
      faq: {
        title: 'Häufige Fragen',
        q1: { q: 'Ist es wirklich kostenlos?', a: 'Ja, 100% kostenlos. Kein Konto, keine Kreditkarte. Deine Daten bleiben auf deinem Gerät.' },
        q2: { q: 'Was brauche ich?', a: 'Einen Computer oder ein Smartphone und dein Fahrrad. Nutze die Live-Webcam, lade ein Video hoch oder mache ein einfaches Profilfoto (rechte Seite). Ideal auf dem Rollentrainer.' },
        q3: { q: 'Ist es so zuverlässig wie ein Profi-Bikefitter?', a: 'Es ist eine sehr gute erste Analyse. Bei komplexen Problemen oder anhaltenden Schmerzen ist ein Profi weiterhin empfohlen. MyBikeFitting gibt dir eine solide Grundlage.' },
        q4: { q: 'Mit welchem Fahrradtyp funktioniert es?', a: 'Rennrad, MTB, Gravel, Stadt, Triathlon... Die Analyse funktioniert mit allen Radtypen.' },
      },
      story: {
        title: 'Warum ich MyBikeFitting gegründet habe',
        paragraph1: 'Nach Monaten mit Knieschmerzen bei jeder Ausfahrt suchte ich nach Lösungen. Termine bei Bikefittern waren teuer und schwer zu bekommen.',
        paragraph2: 'Ich verbrachte Stunden auf YouTube und lernte, meinen Sattel einzustellen. Versuch, Fehler, Versuch... bis ich die richtige Position fand.',
        paragraph3: 'Heute ist diese Erfahrung automatisiert. Die KI erledigt in 5 Minuten, wofür ich Wochen brauchte.',
        signature: 'Elouan',
        role: 'Radfahrer & Ersteller von MyBikeFitting',
      },
      cta: {
        title: 'Bereit für deine nächste Ausfahrt?',
        description: '5 Minuten, um deine Position zu optimieren.',
        description2: 'Stunden zusätzlicher Komfort auf dem Rad.',
        button: 'Kostenlose Analyse starten',
      },
      privacy: {
        title: 'Deine Daten bleiben privat',
        subtitle: '100% lokale Verarbeitung, keine Datenübertragung',
        items: {
          local: {
            title: 'Lokale Verarbeitung',
            desc: 'Dein Video wird direkt auf deinem Gerät analysiert',
          },
          noUpload: {
            title: 'Kein Upload',
            desc: 'Deine Bilder und Videos verlassen nie deinen Browser',
          },
        },
      },
      stats: {
        analyses: 'Analysen durchgeführt',
        rating: 'Durchschnittsbewertung',
        reviews: 'Bewertungen',
      },
      captureGuide: {
        title: 'So gelingt die Aufnahme',
        subtitle: 'Befolge diese Tipps für eine genaue Analyse',
        tips: {
          side: {
            title: 'Seitenansicht',
            desc: 'Positioniere die Kamera rechtwinklig zum Fahrrad auf Sattelhöhe. Die rechte Seite (Kettenblatt sichtbar) ist ideal.',
          },
          lighting: {
            title: 'Gute Beleuchtung',
            desc: 'Nutze Tageslicht oder gleichmäßige Beleuchtung. Vermeide Gegenlicht und harte Schatten.',
          },
          clothing: {
            title: 'Eng anliegende Kleidung',
            desc: 'Trage enganliegende Kleidung (Radhose, Trikot) für präzise Gelenkerkennung.',
          },
          distance: {
            title: 'Passender Abstand',
            desc: 'Fahrrad und Fahrer sollten komplett sichtbar sein, mit etwas Rand.',
          },
          pedal: {
            title: 'Pedalposition',
            desc: 'Für die Analyse: Pedal am unteren Totpunkt (6 Uhr). Dort wird die Kniestreckung gemessen.',
          },
          stable: {
            title: 'Stabiler Stand',
            desc: 'Nutze nach Möglichkeit einen Rollentrainer. Alternativ an eine Wand lehnen oder Hilfe holen.',
          },
        },
      },
      methodology: {
        title: 'Wissenschaftliche Methodik',
        subtitle: 'Unsere Winkelbereiche basieren auf wissenschaftlicher Literatur und professionellen Bikefitting-Standards',
        angles: {
          knee: {
            title: 'Kniestreckung (140-150°)',
            desc: 'Am unteren Totpunkt gemessen bestimmt dieser Winkel die optimale Sattelhöhe. Die Holmes-Methode empfiehlt 25-35° Beugung gegenüber der vollständigen Streckung.',
            consequence: 'Zu niedrig = Knieschmerzen, zu hoch = Becken kippt',
          },
          hip: {
            title: 'Hüftwinkel (55-70°)',
            desc: 'Die minimale Öffnung zwischen Oberschenkel und Oberkörper am oberen Totpunkt. Dieser Winkel beeinflusst Komfort und Leistung.',
            consequence: 'Zu geschlossen = Kompression der Iliakalarterie, eingeschränkte Atmung',
          },
          back: {
            title: 'Rückenneigung (35-50°)',
            desc: 'Der Winkel zwischen Rücken und Horizontalen variiert je nach Fahrstil: 40-50° für Ausdauer, 30-45° für Rennrad-Performance.',
            consequence: 'Niedrigere Winkel sind aerodynamischer, aber anspruchsvoller',
          },
          arm: {
            title: 'Armwinkel (150-165°)',
            desc: 'Leicht gebeugte Arme (~20° Beugung) dämpfen Vibrationen und halten die Schultern entspannt.',
            consequence: 'Gestreckte Arme = Nackenspannung, taube Hände',
          },
        },
        sources: {
          title: 'Quellen',
          references: [
            'Holmes JC, Pruitt AL, Whalen NJ. (1994). Lower extremity overuse in bicycling. Clinics in Sports Medicine.',
            'Millour G, et al. (2020). Comparison of static and dynamic methods based on knee kinematics.',
            'Bini RR, et al. (2011). Effects of saddle height on pedal force effectiveness.',
            'Ferrer-Roca V, et al. (2014). Saddle height effects on pedal forces and kinematics.',
          ],
          disclaimer: 'Dies sind allgemeine Referenzwerte. Bei komplexen Fällen ist eine professionelle Analyse empfohlen.',
        },
        externalLink: {
          text: 'Bei anhaltenden Problemen konsultiere einen',
          linkText: 'IBFI-zertifizierten Bikefitter',
          url: 'https://www.ibfi-certification.com/',
        },
      },
    },

    // Newsletter
    newsletter: {
      title: 'Bleib informiert',
      subtitle: 'Erhalte unsere Rad-Tipps und neue Funktionen',
      placeholder: 'Deine E-Mail',
      button: 'Abonnieren',
      promise: 'Kein Spam, versprochen. Maximal 2 E-Mails pro Monat.',
      success: 'Danke! Du bist angemeldet.',
      error: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
      invalid: 'Ungültige E-Mail',
    },

    // Email popup
    emailPopup: {
      title: 'Kostenloser lebenslanger Zugang',
      subtitle: 'Melde dich an, um den kostenlosen Zugang zu behalten und über wichtige Updates informiert zu werden.',
      placeholder: 'Deine E-Mail',
      button: 'Anmelden',
      noSpam: 'Kein Spam, nur wichtige Neuigkeiten.',
      success: 'Danke! Du bist angemeldet.',
      later: 'Später',
    },

    // Language modal
    languageModal: {
      title: 'Wähle deine Sprache',
      subtitle: 'Wähle eine Sprache, um fortzufahren',
    },

    // Evaluation page
    evaluation: {
      title: 'Wähle deine Art der Analyse',
      subtitle: 'Wähle die Art der Analyse, die zu deinen Bedürfnissen passt',
      recommended: 'Empfohlen',
      duration: 'Dauer',
      choose: 'Auswählen',
      options: {
        quiz: {
          title: 'Interaktiver Fragebogen',
          description: 'Beantworte Fragen zu deiner Erfahrung, deinen Zielen und möglichen Schmerzen, um ein personalisiertes Radfahrerprofil zu erhalten.',
          duration: '5-10 Min',
        },
        mobility: {
          title: 'Mobilitätstest',
          description: 'Bewerte deine Flexibilität und Gelenkmobilität durch geführte Übungen.',
          duration: '5-10 Min',
        },
        complete: {
          title: 'Komplette Analyse',
          description: 'Kombiniere den Fragebogen und den Mobilitätstest für eine umfassende Analyse und genauere Empfehlungen.',
          duration: '15-25 Min',
        },
      },
      skipToAnalysis: 'Direkt zur Videoanalyse springen',
    },

    // Quiz page
    quiz: {
      title: 'Radfahrer-Fragebogen',
      question: 'Frage',
      finish: 'Fragebogen beenden',
      autoSaved: 'Fortschritt wird automatisch gespeichert',
    },

    // Quiz questions
    quizQuestions: {
      experience: {
        question: 'Wie hoch ist dein Erfahrungsniveau im Radsport?',
        options: [
          { value: 'beginner', label: 'Anfänger (weniger als 1 Jahr)' },
          { value: 'intermediate', label: 'Fortgeschritten (1-3 Jahre)' },
          { value: 'advanced', label: 'Sehr fortgeschritten (3-5 Jahre)' },
          { value: 'expert', label: 'Experte (mehr als 5 Jahre)' },
        ],
      },
      practiceType: {
        question: 'Welche Art(en) von Radfahren betreibst du?',
        options: [
          { value: 'road', label: 'Rennrad' },
          { value: 'mtb', label: 'Mountainbike' },
          { value: 'gravel', label: 'Gravel' },
          { value: 'urban', label: 'Stadt/Pendeln' },
          { value: 'triathlon', label: 'Triathlon' },
        ],
      },
      objectives: {
        question: 'Was sind deine Hauptziele?',
        options: [
          { value: 'comfort', label: 'Komfort verbessern' },
          { value: 'performance', label: 'Leistung verbessern' },
          { value: 'endurance', label: 'Ausdauer steigern' },
          { value: 'painRelief', label: 'Schmerzen reduzieren' },
          { value: 'aerodynamics', label: 'Aerodynamik optimieren' },
        ],
      },
      painPoints: {
        question: 'Hast du während der Fahrten Schmerzen?',
        options: [
          { value: 'none', label: 'Keine Schmerzen' },
          { value: 'back', label: 'Rücken' },
          { value: 'neck', label: 'Nacken/Hals' },
          { value: 'knees', label: 'Knie' },
          { value: 'hands', label: 'Hände/Handgelenke' },
          { value: 'feet', label: 'Füße' },
          { value: 'buttocks', label: 'Gesäß/Sitzbereich' },
          { value: 'shoulders', label: 'Schultern' },
        ],
      },
      weeklyHours: {
        question: 'Wie viele Stunden pro Woche verbringst du auf dem Rad?',
        options: [
          { value: 'less3', label: 'Weniger als 3h' },
          { value: '3to5', label: '3-5h' },
          { value: '5to10', label: '5-10h' },
          { value: '10to15', label: '10-15h' },
          { value: 'more15', label: 'Mehr als 15h' },
        ],
      },
      height: {
        question: 'Wie groß bist du?',
      },
      inseam: {
        question: 'Wie lang ist deine Schrittlänge?',
        hint: 'Miss den Abstand vom Boden bis zum Schritt, barfuß im Stehen.',
      },
    },

    // Mobility test page
    mobilityTest: {
      title: 'Mobilitätstest',
      test: 'Test',
      start: 'Test starten',
      skip: 'Diesen Test überspringen',
      instructions: 'Anleitungen',
      performMovement: 'Führe die Bewegung aus und bewerte deine Mobilität',
      doMovement: 'Führe die Bewegung aus',
      rateYourMobility: 'Wie bewertest du deine Mobilität?',
      ratings: {
        limited: 'Eingeschränkt',
        average: 'Durchschnittlich',
        good: 'Gut',
        excellent: 'Ausgezeichnet',
      },
      tests: {
        hamstring: {
          name: 'Flexibilität der Oberschenkelrückseite',
          description: 'Bewerte die Flexibilität der Rückseite deiner Oberschenkel',
          instructions: [
            'Stelle dich mit gestreckten Beinen hin',
            'Beuge dich nach vorn und versuche, die Zehen zu berühren',
            'Halte die Knie gestreckt',
            'Halte die Position 5 Sekunden',
          ],
        },
        hip: {
          name: 'Hüftmobilität',
          description: 'Teste den Bewegungsumfang deiner Hüften',
          instructions: [
            'Lege dich auf den Rücken',
            'Ziehe ein Knie zur Brust',
            'Halte das andere Bein gestreckt am Boden',
            'Wechsle die Seiten ab',
          ],
        },
        back: {
          name: 'Rückenflexibilität',
          description: 'Bewerte die Beweglichkeit deiner Wirbelsäule',
          instructions: [
            'Gehe in den Vierfüßlerstand',
            'Wölbe den Rücken nach oben (Katzenbuckel)',
            'Dann senke den Rücken nach unten',
            'Wiederhole das 5-mal langsam',
          ],
        },
        shoulder: {
          name: 'Schulterrotation',
          description: 'Teste die Beweglichkeit deiner Schultern',
          instructions: [
            'Hebe einen Arm über den Kopf',
            'Beuge den Ellbogen, um deinen Rücken zu berühren',
            'Mit der anderen Hand greifst du hinter den Rücken',
            'Versuche, deine Hände zusammenzuführen',
          ],
        },
      },
    },

    // Bike Analysis
    bikeAnalysis: {
      title: 'Positionsanalyse',
      subtitle: 'Erfasse deine Position auf dem Rad für eine personalisierte Analyse',
      // Method selection
      methodSelectTitle: 'Positionsanalyse',
      methodSelectDesc: 'Wähle deine Aufnahmemethode',
      recommended: 'Empfohlen',
      webcamOption: 'Live-Webcam',
      webcamDesc: 'Echtzeitanalyse mit Countdown',
      videoOption: 'Video importieren',
      videoOptionDesc: 'Lade ein vorhandenes Video für die automatische Analyse hoch',
      photoOption: 'Foto importieren',
      photoOptionDesc: 'Sofortige Analyse eines Profilfotos',
      highPrecision: 'Hohe Präzision',
      goodPrecision: 'Gute Präzision',
      lessPrecise: 'Weniger präzise',
      multiFrame: 'Multi-Frame',
      singleFrame: 'Einzelbild',
      // Intro
      introTitle: 'Positionsanalyse',
      introDesc: 'Wir erfassen deine Position auf dem Rad. Wähle deine Vorbereitungszeit.',
      howItWorks: 'So funktioniert es:',
      step1: 'Platziere dein Telefon/Computer 2-3 m entfernt, von der Seite',
      step2: 'Wähle die Verzögerung und klicke auf "Start"',
      step3: 'Steig aufs Rad und tritt normal',
      step4: 'Tritt 2 volle Umdrehungen für die Aufnahme',
      startAnalysis: 'Analyse starten',
      preparation: 'Vorbereitung',
      loadingCamera: 'Kamera und Modell werden geladen...',
      cameraReady: 'Kamera bereit! Positioniere dich und starte den Timer.',
      positioning: 'Positionierung:',
      positionTip1: 'Positioniere dich seitlich zur Kamera',
      positionTip2: 'Abstand: 2-3 Meter, Kamera auf Sattelhöhe',
      positionTip3: 'Gute Beleuchtung (kein Gegenlicht)',
      countdownDelayLabel: 'Zeit bis zur Aufnahme:',
      alignWithSilhouette: 'Richte dich an der Silhouette aus',
      startTimer: 'Timer starten',
      getReady: 'Bereit machen!',
      mountBike: 'Steig aufs Rad und tritt',
      capturing: 'Aufnahme läuft',
      pedalOneCycle: 'Tritt in gleichmäßigem Tempo',
      cycles: 'Umdrehungen',
      results: 'Analyseergebnisse',
      knee: 'Knie (Streckung)',
      hip: 'Hüfte',
      back: 'Rücken (Winkel)',
      arm: 'Arm',
      ideal: 'Ideal',
      noData: 'Keine Daten erfasst',
      redoAnalysis: 'Analyse wiederholen',
      viewRecommendations: 'Empfehlungen ansehen',
      // Upload options
      orUpload: 'Oder lade dein eigenes Medium hoch:',
      uploadPhoto: 'Foto hochladen',
      uploadVideo: 'Video hochladen',
      photoAnalysis: 'Fotoanalyse',
      videoAnalysis: 'Videoanalyse',
      selectPhoto: 'Wähle ein Foto deiner Position',
      selectVideo: 'Wähle ein Video deines Tretens',
      photoHint: 'Profilfoto auf dem Rad, linke Seite sichtbar',
      videoHint: 'Video von 10-30 Sekunden, normales Pedalieren',
      analyzing: 'Analyse läuft...',
      analyzingFrame: 'Frame wird analysiert',
      of: 'von',
      noPoseDetected: 'Keine Körperhaltung erkannt. Probiere eine andere Datei.',
      notVisible: 'Nicht sichtbar',
      useResults: 'Diese Ergebnisse verwenden',
      chooseDifferent: 'Andere Datei wählen',
      dragDrop: 'Ziehen und ablegen oder klicken, um auszuwählen',
      // Camera loading
      loadingCameraShort: 'Kamera wird geladen...',
      // Analysis steps
      steps: {
        loadingImage: 'Bild wird geladen...',
        loadingModel: 'KI wird initialisiert...',
        detecting: 'Körperhaltung wird erkannt...',
        calculating: 'Winkel werden berechnet...',
        loadingVideo: 'Video wird geladen...',
        preparingFile: 'Datei wird vorbereitet',
        loadingMediaPipe: 'MediaPipe-Modell wird geladen',
        finalizing: 'Analyse wird abgeschlossen...',
      },
      // Angle labels
      angleLabels: {
        knee: 'Knie',
        hip: 'Hüfte',
        back: 'Rücken',
        arm: 'Arm',
      },
      // Video analysis
      framesAnalyzed: 'Frames analysiert',
      kneeExtensionDetected: 'Kniestreckung erkannt',
      framesWithPose: 'Frames mit erkannter Körperhaltung',
      selectingBest: 'Beste Winkel werden ausgewählt...',
      // PoseDetector
      accessingCamera: 'Kamera wird geöffnet...',
      startingVideo: 'Video wird gestartet...',
      cameraError: 'Kamera kann nicht verwendet werden. Prüfe die Berechtigungen.',
      retry: 'Erneut versuchen',
      switchCamera: 'Kamera wechseln',
    },

    // Recommendations
    recommendations: {
      title: 'Deine personalisierten Empfehlungen',
      basedOn: 'Basierend auf deinen Antworten im Fragebogen',
      andAnalysis: 'und deiner Positionsanalyse',
      summary: 'Zusammenfassung der Analyse',
      loading: 'Empfehlungen werden erstellt...',
      excellent: 'Ausgezeichnete Position!',
      optimalPosition: 'Deine Position wirkt optimal. Weiter so!',
      redoAnalysis: 'Analyse wiederholen',
      newEvaluation: 'Neue Analyse',
      exportPDF: 'Meinen Bericht erhalten',
      exporting: 'Senden...',
      exportError: 'Fehler beim Senden',
      emailPlaceholder: 'Deine E-Mail',
      emailSent: 'Bericht gesendet!',
      emailSentDesc: 'Prüfe deinen Posteingang',
      sendReport: 'Senden',
      reportPromo: 'Erhalte deinen PDF-Bericht + Tipps für mehr Fortschritt',
      freeForever: 'Kostenloser Zugang auf Lebenszeit garantiert, auch wenn der Dienst kostenpflichtig wird',
      pdfRecommendations: 'Empfehlungen',
      pdfGeneratedBy: 'Erstellt von MyBikeFitting - mybikefitting.com',
      priority: {
        high: 'Hohe Priorität',
        medium: 'Mittlere Priorität',
        low: 'Niedrige Priorität',
      },
      current: 'Aktuell',
      recommended: 'Empfohlen',
      adjustment: 'Anpassung',
      directions: {
        up: 'Anheben',
        down: 'Absenken',
        forward: 'Nach vorn',
        backward: 'Nach hinten',
        shorter: 'Kürzen',
        longer: 'Verlängern',
      },
      photoLimitationHint: 'Für genaue cm-Anpassungen nutze die Video- oder Webcam-Analyse',
      viewLarger: 'Größer anzeigen',
      clickToClose: 'Zum Schließen klicken',
      angles: {
        knee: 'Knie',
        hip: 'Hüfte',
        back: 'Rücken',
        arm: 'Arm',
      },
      angleStatus: {
        optimal: 'Optimal',
        warning: 'Anpassung nötig',
        bad: 'Korrektur nötig',
      },
      adjustmentsRecommended: 'Empfohlene Anpassungen:',
      items: {
        saddleHeightLow: 'Sattelhöhe erhöhen',
        saddleHeightLowDesc: 'Deine Kniestreckung ist zu gering. Ein zu niedriger Sattel kann Knieschmerzen verursachen.',
        saddleHeightHigh: 'Sattelhöhe senken',
        saddleHeightHighDesc: 'Deine Kniestreckung ist zu hoch. Ein zu hoher Sattel kann ein Kippen des Beckens verursachen.',
        saddleSetback: 'Sattel-Offset anpassen',
        saddleSetbackDesc: 'Dein Hüftwinkel ist zu geschlossen. Das kann Leistung begrenzen und Schmerzen verursachen.',
        handlebarHeightLow: 'Lenker höher stellen',
        handlebarHeightLowDesc: 'Deine Position ist zu aggressiv. Das kann Nacken- und Rückenschmerzen verursachen.',
        handlebarHeightHigh: 'Lenker tiefer stellen',
        handlebarHeightHighDesc: 'Deine Position ist zu aufrecht. Das kann die Aerodynamik verringern.',
        stemLength: 'Vorbau zu kurz',
        stemLengthDesc: 'Deine Arme sind zu stark gebeugt. Ziehe einen längeren Vorbau in Betracht.',
        painKnees: 'Knieschmerzen',
        painKneesDesc: 'Prüfe Sattelhöhe und Cleat-Position.',
        painBack: 'Rückenschmerzen',
        painBackDesc: 'Probiere eine aufrechtere Position. Stärke deine Rumpfmuskulatur.',
        painNeck: 'Nackenschmerzen',
        painNeckDesc: 'Position zu aggressiv. Lenker höher stellen.',
        painHands: 'Taubheitsgefühl in den Händen',
        painHandsDesc: 'Zu viel Gewicht auf den Händen. Prüfe die Lenkerneigung.',
        painFeet: 'Fußschmerzen',
        painFeetDesc: 'Prüfe die Cleat-Position und die Schuhbreite.',
        beginnerPosition: 'Empfohlene Komfortposition',
        beginnerPositionDesc: 'Als Anfänger priorisiere eine aufrechtere Position.',
      },
    },

    // Angles (legacy)
    angles: {
      knee: 'Knie',
      hip: 'Hüfte',
      back: 'Rücken',
      arm: 'Arm',
    },

    // Feedback
    feedback: {
      title: 'Deine Meinung zählt!',
      subtitle: 'Wie war deine Analyse-Erfahrung?',
      placeholder: 'Ein Kommentar? (optional)',
      submit: 'Senden',
      skip: 'Überspringen',
      thanks: 'Danke für dein Feedback!',
    },

    // Footer
    footer: {
      tagline: 'Optimiere deine Sitzposition',
      navigation: 'Navigation',
      startEvaluation: 'Loslegen',
      quiz: 'Fragebogen',
      analysis: 'Analyse',
      legal: 'Rechtliche Hinweise',
      cgu: 'Nutzungsbedingungen',
      privacy: 'Datenschutzerklärung',
      mentions: 'Impressum',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.',
    },

    // 404 Page
    notFound: {
      title: 'Seite nicht gefunden',
      message: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
      backHome: 'Zur Startseite',
      startEvaluation: 'Analyse starten',
    },

    // Cookies
    cookies: {
      message: 'Diese Website verwendet Cookies, um deine Erfahrung zu verbessern. Deine Daten bleiben auf deinem Gerät.',
      learnMore: 'Mehr erfahren',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
    },

    // Legal pages
    legal: {
      cgu: {
        title: 'Nutzungsbedingungen',
        lastUpdate: 'Letzte Aktualisierung',
        sections: {
          acceptance: {
            title: 'Annahme der Bedingungen',
            content: 'Durch die Nutzung von MyBikeFitting stimmst du diesen Nutzungsbedingungen zu. Wenn du nicht einverstanden bist, nutze diesen Dienst bitte nicht.',
          },
          service: {
            title: 'Beschreibung des Dienstes',
            content: 'MyBikeFitting ist ein Tool zur Analyse der Fahrradposition mit Webcam-Körperhaltungserkennung. Der Dienst bietet personalisierte Empfehlungen basierend auf der Analyse deiner Gelenkwinkel und deiner Fragebogenantworten.',
          },
          usage: {
            title: 'Nutzung des Dienstes',
            content: 'Du verpflichtest dich, diesen Dienst nur für persönliche, nicht-kommerzielle Zwecke zu nutzen. Die Nutzung der Kamera erfordert deine ausdrückliche Zustimmung.',
          },
          data: {
            title: 'Personendaten',
            content: 'Alle deine Daten werden lokal auf deinem Gerät gespeichert (localStorage). Es werden keine Daten an unsere Server übertragen. Kamerabilder werden in Echtzeit verarbeitet und nie gespeichert.',
          },
          liability: {
            title: 'Haftungsbeschränkung',
            content: 'MyBikeFitting liefert Empfehlungen nur zu Informationszwecken. Diese ersetzen keine professionelle Bikefitting-Beratung. Wir übernehmen keine Haftung für Verletzungen, die aus der Anwendung dieser Empfehlungen entstehen.',
          },
          modifications: {
            title: 'Änderungen',
            content: 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen treten mit Veröffentlichung auf der Website in Kraft.',
          },
        },
      },
      privacy: {
        title: 'Datenschutzerklärung',
        lastUpdate: 'Letzte Aktualisierung',
        sections: {
          collection: {
            title: 'Datenerhebung',
            content: 'MyBikeFitting erfasst nur Daten, die du freiwillig angibst: Fragebogenantworten (Level, Ziele, Schmerzen) und Körpermaße (Größe, Schrittlänge).',
          },
          camera: {
            title: 'Kameranutzung',
            content: 'Der Kamerazugriff wird ausschließlich für die Echtzeit-Positionsanalyse genutzt. Bilder werden nie aufgezeichnet oder übertragen. Die Verarbeitung erfolgt vollständig auf deinem Gerät mit MediaPipe-Technologie.',
          },
          storage: {
            title: 'Datenspeicherung',
            content: 'Alle deine Daten werden lokal im localStorage deines Browsers gespeichert. Es werden keine Daten an externe Server gesendet. Du kannst diese Daten jederzeit löschen, indem du deine Browserdaten löschst.',
          },
          cookies: {
            title: 'Cookies',
            content: 'MyBikeFitting verwendet nur essentielle technische Cookies, um deine Sprachpräferenzen und die Cookie-Einwilligung zu speichern. Es werden keine Tracking- oder Werbe-Cookies verwendet.',
          },
          rights: {
            title: 'Deine Rechte',
            content: 'Nach der DSGVO hast du das Recht auf Auskunft, Berichtigung und Löschung deiner Daten. Da deine Daten lokal gespeichert werden, kannst du sie direkt in den Browsereinstellungen löschen.',
          },
          contact: {
            title: 'Kontakt',
            content: 'Bei Fragen zu deinen personenbezogenen Daten kontaktiere uns unter: contact@mybikefitting.com',
          },
        },
      },
      mentions: {
        title: 'Impressum',
        sections: {
          editor: {
            title: 'Seitenbetreiber',
            name: 'Name',
            status: 'Status',
            statusValue: 'Persönliches Projekt',
            email: 'E-Mail',
          },
          hosting: {
            title: 'Hosting',
            provider: 'Anbieter',
            address: 'Adresse',
          },
          ip: {
            title: 'Urheberrecht',
            content: 'Alle Inhalte dieser Website (Texte, Bilder, Code) sind urheberrechtlich geschützt. Jede unerlaubte Vervielfältigung ist verboten.',
          },
          credits: {
            title: 'Credits',
            mediapipe: 'Körperhaltungserkennung: MediaPipe (Google)',
            nextjs: 'Framework: Next.js (Vercel)',
          },
        },
      },
    },

    // Errors
    errors: {
      cameraAccessDenied: 'Kamerazugriff verweigert. Erlaube den Zugriff in deinem Browser.',
      noCamera: 'Keine Kamera erkannt.',
      initError: 'Initialisierung der Erkennung fehlgeschlagen.',
    },

    // Suggestions
    suggestions: {
      title: 'Deine Ideen',
      subtitle: 'Schlage Verbesserungen vor oder stimme über bestehende Ideen ab',
      cta: 'Hast du eine Idee? Schlag sie vor!',
      newIdea: 'Idee vorschlagen',
      ideaTitle: 'Titel deiner Idee',
      ideaDescription: 'Beschreibung (optional)',
      yourEmail: 'Deine E-Mail',
      submit: 'Senden',
      submitting: 'Wird gesendet...',
      success: 'Danke für deinen Vorschlag!',
      error: 'Ein Fehler ist aufgetreten',
      vote: 'Abstimmen',
      votes: 'Stimmen',
      noSuggestions: 'Noch keine Vorschläge. Sei der Erste!',
      emailHint: 'Damit wir dich über den Fortschritt informieren können',
      status: {
        pending: 'Ausstehend',
        planned: 'Geplant',
        inProgress: 'In Arbeit',
        done: 'Erledigt',
      },
    },

    // Cleat positioning
    cleatPositioning: {
      title: 'Cleat-Positionierung',
      subtitle: 'Leitfaden zum korrekten Positionieren deiner Schuhcleats',
      intro: 'Eine korrekte Cleat-Positionierung ist entscheidend, um Knieschmerzen zu vermeiden und dein Pedalieren zu optimieren.',
      steps: {
        step1: {
          title: 'Finde den Ballen deines Fußes',
          description: 'Der erste Mittelfußkopf (Ballen) sollte über der Pedalachse liegen. Markiere diesen Punkt an der Seite deines Schuhs.',
        },
        step2: {
          title: 'Cleat vorne/hinten positionieren',
          description: 'Richte die Mitte des Cleats an der Markierung aus. Wenn du vordere Knieschmerzen hast, schiebe das Cleat leicht nach hinten.',
        },
        step3: {
          title: 'Rotation anpassen',
          description: 'Setz dich hin und lass deine Füße natürlich hängen. Das Cleat sollte diese natürliche Ausrichtung ermöglichen.',
        },
        step4: {
          title: 'Medial/lateral Position',
          description: 'Deine Knie sollten beim Pedalieren ausgerichtet bleiben. Wenn deine Knie nach außen wandern, schiebe die Cleats näher an die Innenkante des Schuhs.',
        },
      },
      tips: {
        title: 'Wichtige Tipps',
        tip1: 'Ziehe die Schrauben schrittweise und gleichmäßig an',
        tip2: 'Mache nach jeder Anpassung eine kurze Probefahrt',
        tip3: 'In kleinen Schritten anpassen (max. 2-3 mm)',
        tip4: 'Beschwerden können sich erst nach mehreren Fahrten zeigen',
      },
      painGuide: {
        title: 'Schmerzleitfaden',
        frontKnee: {
          title: 'Vordere Knieschmerzen',
          solution: 'Cleat zu weit vorne → Cleat nach hinten',
        },
        backKnee: {
          title: 'Hintere Knieschmerzen',
          solution: 'Cleat zu weit hinten → Cleat nach vorne',
        },
        insideKnee: {
          title: 'Innere Knieschmerzen',
          solution: 'Fuß zu weit nach außen → Cleat nach innen drehen',
        },
        outsideKnee: {
          title: 'Äußere Knieschmerzen',
          solution: 'Fuß zu weit nach innen → Cleat nach außen drehen',
        },
      },
      backToResults: 'Zurück zu den Ergebnissen',
    },
  },


  es: {
    // Common
    loading: 'Cargando...',
    back: 'Atrás',
    next: 'Siguiente',
    previous: 'Anterior',
    skip: 'Omitir',
    retry: 'Reintentar',
    choose: 'Elegir',
    start: 'Iniciar',
    finish: 'Terminar',
    cancel: 'Cancelar',
    recommended: 'Recomendado',
    duration: 'Duración',

    // Breadcrumb
    breadcrumb: {
      evaluation: 'Evaluación',
      quiz: 'Cuestionario',
      mobility: 'Movilidad',
      analysis: 'Análisis',
      recommendations: 'Resultados',
    },

    // Home page
    home: {
      hero: {
        badge: 'Bikefitting gratis · 5 minutos · Sin registro',
        titleLine1: 'Estudio biomecánico',
        titleLine2: 'ciclismo gratis',
        description: 'Analiza tu posición en bici por webcam, vídeo o foto. Detecta las causas de tus dolores (rodilla, espalda, cuello) y obtén recomendaciones de altura de sillín, retroceso y manillar.',
        cta: 'Empezar análisis gratis',
        resumeAnalysis: 'Retomar mi análisis',
        howItWorks: 'Cómo funciona',
        analysisChoice: {
          title: 'Ya existe un análisis',
          description: 'Ya has realizado un análisis. ¿Qué deseas hacer?',
          viewResults: 'Ver mis resultados',
          startNew: 'Nuevo análisis',
        },
      },
      preview: {
        analyzing: 'Analizando...',
        kneeExtension: 'Extensión rodilla',
        hipAngle: 'Ángulo cadera',
        backAngle: 'Ángulo espalda',
        armAngle: 'Ángulo brazo',
        recommendation: 'Recomendación',
        saddleAdjust: 'Sillín +2cm',
      },
      painPoints: {
        title: '¿Dolores en bicicleta? No estás solo',
        knee: { title: 'Dolor rodilla ciclismo', desc: 'Causa #1: altura del sillín incorrecta. Nuestro análisis detecta este problema.' },
        back: { title: 'Dolor espalda bicicleta', desc: 'A menudo causado por mala posición del manillar o retroceso del sillín.' },
        fatigue: { title: 'Adormecimiento manos', desc: '¿Demasiado peso adelante? El ángulo de tu espalda y potencia necesitan revisión.' },
        conclusion: 'En el 80% de los casos, es un problema de',
        position: 'posición',
      },
      steps: {
        title: '3 pasos, 5 minutos',
        subtitle: 'Sin cita ni equipo especial',
        step1: { title: 'Cuestionario', desc: 'Cuéntanos tu práctica: carretera, MTB, gravel. Tus dolores, tus objetivos.' },
        step2: { title: 'Captura', desc: 'Webcam en vivo, vídeo o simple foto — elige tu método. Nuestra IA analiza tus ángulos en segundos.' },
        step3: { title: 'Ajustes', desc: 'Altura del sillín, retroceso, manillar... Recibe recomendaciones detalladas.' },
      },
      angles: {
        title: 'Los ángulos que importan',
        description: 'Nuestro análisis mide los 4 ángulos clave para una posición óptima. Cada grado cuenta para tu comodidad y potencia.',
        realtime: 'Análisis en tiempo real',
        knee: { label: 'Extensión rodilla', range: '140-150°', tip: 'En el punto bajo del pedaleo' },
        hip: { label: 'Ángulo cadera', range: '55-70°', tip: 'Apertura de la pelvis' },
        back: { label: 'Ángulo espalda', range: '35-50°', tip: 'Según tu práctica' },
        arm: { label: 'Ángulo brazo', range: '150-165°', tip: 'Ligeramente flexionados' },
      },
      cycling: {
        title: 'Para todos los ciclistas',
        types: ['Carretera', 'MTB', 'Gravel', 'Triatlón', 'Ciudad', 'Rodillo'],
      },
      faq: {
        title: 'Preguntas frecuentes',
        q1: { q: '¿Es realmente gratis?', a: 'Sí, 100% gratis. Sin crear cuenta, sin tarjeta. Tus datos permanecen en tu dispositivo.' },
        q2: { q: '¿Qué necesito?', a: 'Un ordenador o móvil, y tu bici. Usa la webcam en vivo, sube un vídeo, o toma una foto de perfil (lado derecho). Idealmente en rodillo.' },
        q3: { q: '¿Es tan fiable como un bikefitter profesional?', a: 'Es un excelente primer análisis. Para problemas complejos o dolor persistente, se recomienda un profesional. MyBikeFitting te da una base sólida.' },
        q4: { q: '¿Con qué tipo de bici funciona?', a: 'Carretera, MTB, gravel, ciudad, triatlón... El análisis funciona con todos los tipos de bici.' },
      },
      story: {
        title: 'Por qué creé MyBikeFitting',
        paragraph1: 'Después de meses de dolor de rodillas en cada salida, busqué soluciones. Las citas con bikefitters eran caras y difíciles de conseguir.',
        paragraph2: 'Pasé horas en YouTube aprendiendo a ajustar mi sillín. Prueba, error, prueba... Hasta encontrar la posición correcta.',
        paragraph3: 'Hoy, esta experiencia está automatizada. La IA hace en 5 minutos lo que me llevó semanas.',
        signature: 'Elouan',
        role: 'Ciclista y Creador de MyBikeFitting',
      },
      cta: {
        title: '¿Listo para tu próxima salida?',
        description: '5 minutos para optimizar tu posición.',
        description2: 'Horas de comodidad extra en la bici.',
        button: 'Comenzar análisis gratis',
      },
      privacy: {
        title: 'Tus datos permanecen privados',
        subtitle: 'Procesamiento 100% local, sin envío de datos',
        items: {
          local: {
            title: 'Procesamiento local',
            desc: 'Tu video se analiza directamente en tu dispositivo',
          },
          noUpload: {
            title: 'Sin envío',
            desc: 'Tus imágenes y videos nunca salen de tu navegador',
          },
        },
      },
      stats: {
        analyses: 'análisis realizados',
        rating: 'nota media',
        reviews: 'opiniones',
      },
      captureGuide: {
        title: 'Cómo capturar correctamente',
        subtitle: 'Sigue estos consejos para un análisis preciso',
        tips: {
          side: {
            title: 'Vista lateral',
            desc: 'Coloca la cámara perpendicular a tu bici, a la altura del sillín. El lado derecho (platos visibles) es ideal.',
          },
          lighting: {
            title: 'Buena iluminación',
            desc: 'Usa luz natural o iluminación uniforme. Evita el contraluz y las sombras marcadas.',
          },
          clothing: {
            title: 'Ropa ajustada',
            desc: 'Usa ropa ceñida (culotte, maillot) para una detección precisa de las articulaciones.',
          },
          distance: {
            title: 'Distancia adecuada',
            desc: 'La bici y el ciclista deben ser visibles completamente, con algo de margen alrededor.',
          },
          pedal: {
            title: 'Posición del pedal',
            desc: 'Para el análisis, coloca el pedal en el punto muerto inferior (6h). Es donde se mide la extensión de rodilla.',
          },
          stable: {
            title: 'Soporte estable',
            desc: 'Usa un rodillo si es posible. Si no, apóyate en una pared o pide ayuda.',
          },
        },
      },
      methodology: {
        title: 'Metodología científica',
        subtitle: 'Nuestros rangos angulares se basan en la literatura científica y las prácticas profesionales de bikefitting',
        angles: {
          knee: {
            title: 'Extensión de rodilla (140-150°)',
            desc: 'Medido en el punto muerto inferior, este ángulo determina la altura óptima del sillín. El método Holmes recomienda 25-35° de flexión respecto a la extensión completa.',
            consequence: 'Muy bajo = dolor de rodilla, muy alto = balanceo de pelvis',
          },
          hip: {
            title: 'Ángulo de cadera (55-70°)',
            desc: 'La apertura mínima entre muslo y torso en el punto muerto superior. Este ángulo afecta el confort y la potencia.',
            consequence: 'Muy cerrado = compresión arteria ilíaca, limitación respiratoria',
          },
          back: {
            title: 'Inclinación de espalda (35-50°)',
            desc: 'El ángulo entre la espalda y la horizontal varía según el tipo de práctica: 40-50° para resistencia, 30-45° para carretera.',
            consequence: 'Ángulos más bajos son más aerodinámicos pero más exigentes',
          },
          arm: {
            title: 'Ángulo de brazos (150-165°)',
            desc: 'Los brazos ligeramente flexionados (~20° de flexión) absorben vibraciones y mantienen los hombros relajados.',
            consequence: 'Brazos rectos = tensión cervical, adormecimiento de manos',
          },
        },
        sources: {
          title: 'Referencias',
          references: [
            'Holmes JC, Pruitt AL, Whalen NJ. (1994). Lower extremity overuse in bicycling. Clinics in Sports Medicine.',
            'Millour G, et al. (2020). Comparison of static and dynamic methods based on knee kinematics.',
            'Bini RR, et al. (2011). Effects of saddle height on pedal force effectiveness.',
            'Ferrer-Roca V, et al. (2014). Saddle height effects on pedal forces and kinematics.',
          ],
          disclaimer: 'Estos son valores de referencia generales. Se recomienda análisis profesional para casos complejos.',
        },
        externalLink: {
          text: 'Para problemas persistentes, consulta un',
          linkText: 'bikefitter certificado IBFI',
          url: 'https://www.ibfi-certification.com/',
        },
      },
    },

    // Newsletter
    newsletter: {
      title: 'Mantente informado',
      subtitle: 'Recibe nuestros consejos de ciclismo y nuevas funciones',
      placeholder: 'Tu email',
      button: 'Suscribirse',
      promise: 'Sin spam, lo prometemos. Máximo 2 emails al mes.',
      success: '¡Gracias! Estás suscrito.',
      error: 'Ocurrió un error. Inténtalo de nuevo.',
      invalid: 'Email inválido',
    },

    // Email popup
    emailPopup: {
      title: 'Acceso gratuito de por vida',
      subtitle: 'Regístrate para mantener el acceso gratuito y estar informado de las novedades importantes.',
      placeholder: 'Tu email',
      button: 'Registrarse',
      noSpam: 'Sin spam, solo noticias importantes.',
      success: '¡Gracias! Estás suscrito.',
      later: 'Más tarde',
    },

    // Language modal
    languageModal: {
      title: 'Elige tu idioma',
      subtitle: 'Selecciona el idioma para continuar',
    },

    // Evaluation page
    evaluation: {
      title: 'Elige tu tipo de evaluación',
      subtitle: 'Selecciona el tipo de evaluación que se ajuste a tus necesidades',
      recommended: 'Recomendado',
      duration: 'Duración',
      choose: 'Elegir',
      options: {
        quiz: {
          title: 'Cuestionario Interactivo',
          description: 'Responde preguntas sobre tu experiencia, objetivos y posibles dolores para obtener un perfil ciclista personalizado.',
          duration: '5-10 min',
        },
        mobility: {
          title: 'Test de Movilidad',
          description: 'Evalúa tu flexibilidad y movilidad articular a través de ejercicios guiados.',
          duration: '5-10 min',
        },
        complete: {
          title: 'Evaluación Completa',
          description: 'Combina el cuestionario y el test de movilidad para un análisis profundo y recomendaciones más precisas.',
          duration: '15-25 min',
        },
      },
      skipToAnalysis: 'Ir directamente al análisis de video',
    },

    // Quiz page
    quiz: {
      title: 'Cuestionario Ciclista',
      question: 'Pregunta',
      finish: 'Terminar cuestionario',
      autoSaved: 'Progreso guardado automáticamente',
    },

    // Quiz questions
    quizQuestions: {
      experience: {
        question: '¿Cuál es tu nivel de experiencia en ciclismo?',
        options: [
          { value: 'beginner', label: 'Principiante (menos de 1 año)' },
          { value: 'intermediate', label: 'Intermedio (1-3 años)' },
          { value: 'advanced', label: 'Avanzado (3-5 años)' },
          { value: 'expert', label: 'Experto (más de 5 años)' },
        ],
      },
      practiceType: {
        question: '¿Qué tipo(s) de ciclismo practicas?',
        options: [
          { value: 'road', label: 'Carretera' },
          { value: 'mtb', label: 'MTB' },
          { value: 'gravel', label: 'Gravel' },
          { value: 'urban', label: 'Urbano/Commuting' },
          { value: 'triathlon', label: 'Triatlón' },
        ],
      },
      objectives: {
        question: '¿Cuáles son tus objetivos principales?',
        options: [
          { value: 'comfort', label: 'Mejorar comodidad' },
          { value: 'performance', label: 'Mejorar rendimiento' },
          { value: 'endurance', label: 'Aumentar resistencia' },
          { value: 'painRelief', label: 'Reducir dolor' },
          { value: 'aerodynamics', label: 'Optimizar aerodinámica' },
        ],
      },
      painPoints: {
        question: '¿Experimentas dolor durante los paseos?',
        options: [
          { value: 'none', label: 'Sin dolor' },
          { value: 'back', label: 'Espalda' },
          { value: 'neck', label: 'Cuello' },
          { value: 'knees', label: 'Rodillas' },
          { value: 'hands', label: 'Manos/Muñecas' },
          { value: 'feet', label: 'Pies' },
          { value: 'buttocks', label: 'Glúteos/Zona del sillín' },
          { value: 'shoulders', label: 'Hombros' },
        ],
      },
      weeklyHours: {
        question: '¿Cuántas horas por semana pasas en la bicicleta?',
        options: [
          { value: 'less3', label: 'Menos de 3h' },
          { value: '3to5', label: '3-5h' },
          { value: '5to10', label: '5-10h' },
          { value: '10to15', label: '10-15h' },
          { value: 'more15', label: 'Más de 15h' },
        ],
      },
      height: {
        question: '¿Cuál es tu altura?',
      },
      inseam: {
        question: '¿Cuál es la longitud de tu entrepierna?',
        hint: 'Mide la distancia del suelo a la entrepierna, descalzo, de pie.',
      },
    },

    // Mobility test page
    mobilityTest: {
      title: 'Test de Movilidad',
      test: 'Test',
      start: 'Iniciar test',
      skip: 'Omitir este test',
      instructions: 'Instrucciones',
      performMovement: 'Realiza el movimiento y evalúa tu movilidad',
      doMovement: 'Realiza el movimiento',
      rateYourMobility: '¿Cómo calificas tu movilidad?',
      ratings: {
        limited: 'Limitado',
        average: 'Medio',
        good: 'Bueno',
        excellent: 'Excelente',
      },
      tests: {
        hamstring: {
          name: 'Flexibilidad de Isquiotibiales',
          description: 'Evalúa la flexibilidad de la parte posterior de tus muslos',
          instructions: [
            'Ponte de pie con las piernas rectas',
            'Inclínate hacia adelante intentando tocar los dedos de los pies',
            'Mantén las rodillas rectas',
            'Mantén la posición 5 segundos',
          ],
        },
        hip: {
          name: 'Movilidad de Cadera',
          description: 'Prueba el rango de movimiento de tus caderas',
          instructions: [
            'Acuéstate boca arriba',
            'Lleva una rodilla hacia el pecho',
            'Mantén la otra pierna estirada en el suelo',
            'Alterna ambos lados',
          ],
        },
        back: {
          name: 'Flexibilidad de Espalda',
          description: 'Evalúa la movilidad de tu columna vertebral',
          instructions: [
            'Ponte a cuatro patas',
            'Arquea la espalda hacia arriba (postura del gato)',
            'Luego hunde la espalda hacia abajo',
            'Repite 5 veces lentamente',
          ],
        },
        shoulder: {
          name: 'Rotación de Hombros',
          description: 'Prueba la movilidad de tus hombros',
          instructions: [
            'Levanta un brazo por encima de la cabeza',
            'Dobla el codo para tocar tu espalda',
            'Con la otra mano, pasa por detrás de la espalda',
            'Intenta juntar las manos',
          ],
        },
      },
    },

    // Bike Analysis
    bikeAnalysis: {
      title: 'Análisis de posición',
      subtitle: 'Captura tu posición en la bicicleta para un análisis personalizado',
      // Method selection
      methodSelectTitle: 'Análisis de posición',
      methodSelectDesc: 'Elige tu método de captura',
      recommended: 'Recomendado',
      webcamOption: 'Webcam en vivo',
      webcamDesc: 'Análisis en tiempo real con temporizador',
      videoOption: 'Importar video',
      videoOptionDesc: 'Sube un video existente para análisis automático',
      photoOption: 'Importar foto',
      photoOptionDesc: 'Análisis instantáneo de una foto de perfil',
      highPrecision: 'Alta precisión',
      goodPrecision: 'Buena precisión',
      lessPrecise: 'Menos preciso',
      multiFrame: 'Multi-frame',
      singleFrame: 'Imagen única',
      // Intro
      introTitle: 'Análisis de posición',
      introDesc: 'Capturaremos tu posición en la bicicleta. Elige tu tiempo de preparación.',
      howItWorks: 'Cómo funciona:',
      step1: 'Coloca tu teléfono/ordenador a 2-3m, de lado',
      step2: 'Elige el tiempo y haz clic en "Iniciar"',
      step3: 'Súbete a la bicicleta y pedalea normalmente',
      step4: 'Pedalea 2 vueltas completas para la captura',
      startAnalysis: 'Iniciar análisis',
      preparation: 'Preparación',
      loadingCamera: 'Cargando cámara y modelo...',
      cameraReady: '¡Cámara lista! Posiciónate e inicia el temporizador.',
      positioning: 'Posicionamiento:',
      positionTip1: 'Colócate de lado frente a la cámara',
      positionTip2: 'Distancia: 2-3 metros, cámara a la altura del sillín',
      positionTip3: 'Buena iluminación (sin contraluz)',
      countdownDelayLabel: 'Tiempo antes de captura:',
      alignWithSilhouette: 'Alinéate con la silueta',
      positionGuide: 'Alinéate con la silueta',
      startTimer: 'Iniciar temporizador',
      getReady: '¡Prepárate!',
      mountBike: 'Súbete a la bicicleta y pedalea',
      capturing: 'Capturando',
      pedalOneCycle: 'Pedalea a un ritmo constante',
      cycles: 'vueltas',
      results: 'Resultados del análisis',
      knee: 'Rodilla (extensión)',
      hip: 'Cadera',
      back: 'Espalda (inclinación)',
      arm: 'Brazo',
      ideal: 'Ideal',
      noData: 'No hay datos capturados',
      redoAnalysis: 'Repetir análisis',
      viewRecommendations: 'Ver recomendaciones',
      // Upload options
      orUpload: 'O sube tu propio archivo:',
      uploadPhoto: 'Subir una foto',
      uploadVideo: 'Subir un video',
      photoAnalysis: 'Análisis de foto',
      videoAnalysis: 'Análisis de video',
      selectPhoto: 'Selecciona una foto de tu posición',
      selectVideo: 'Selecciona un video de tu pedaleo',
      photoHint: 'Foto de perfil en la bici, lado izquierdo visible',
      videoHint: 'Video de 10-30 segundos, pedaleando normalmente',
      analyzing: 'Analizando...',
      analyzingFrame: 'Analizando frame',
      of: 'de',
      noPoseDetected: 'No se detectó ninguna pose. Prueba otro archivo.',
      notVisible: 'No visible',
      useResults: 'Usar estos resultados',
      chooseDifferent: 'Elegir otro archivo',
      dragDrop: 'Arrastra y suelta o haz clic para seleccionar',
      // Camera loading
      loadingCameraShort: 'Cargando cámara...',
      // Analysis steps
      steps: {
        loadingImage: 'Cargando imagen...',
        loadingModel: 'Inicializando IA...',
        detecting: 'Detectando pose...',
        calculating: 'Calculando ángulos...',
        loadingVideo: 'Cargando video...',
        preparingFile: 'Preparando archivo',
        loadingMediaPipe: 'Cargando modelo MediaPipe',
        finalizing: 'Finalizando análisis...',
      },
      // Angle labels
      angleLabels: {
        knee: 'Rodilla',
        hip: 'Cadera',
        back: 'Espalda',
        arm: 'Brazo',
      },
      // Video analysis
      framesAnalyzed: 'frames analizados',
      kneeExtensionDetected: 'Extensión de rodilla detectada',
      framesWithPose: 'frames con pose detectada',
      selectingBest: 'Seleccionando mejores ángulos...',
      // PoseDetector
      accessingCamera: 'Accediendo a la cámara...',
      startingVideo: 'Iniciando video...',
      cameraError: 'No se puede acceder a la cámara. Verifica los permisos.',
      retry: 'Reintentar',
      switchCamera: 'Cambiar cámara',
    },

    // Recommendations
    recommendations: {
      title: 'Tus recomendaciones personalizadas',
      basedOn: 'Basadas en tus respuestas del cuestionario',
      andAnalysis: 'y el análisis de tu posición',
      summary: 'Resumen del análisis',
      loading: 'Generando recomendaciones...',
      excellent: '¡Excelente posición!',
      optimalPosition: 'Tu posición parece óptima. ¡Sigue así!',
      redoAnalysis: 'Repetir análisis',
      newEvaluation: 'Nueva evaluación',
      exportPDF: 'Recibir mi informe',
      exporting: 'Enviando...',
      exportError: 'Error al enviar',
      emailPlaceholder: 'Tu email',
      emailSent: '¡Informe enviado!',
      emailSentDesc: 'Revisa tu bandeja de entrada',
      sendReport: 'Enviar',
      reportPromo: 'Recibe tu informe PDF + consejos para ir más lejos',
      freeForever: 'Acceso gratuito de por vida garantizado, incluso si el servicio se vuelve de pago',
      pdfRecommendations: 'Recomendaciones',
      pdfGeneratedBy: 'Generado por MyBikeFitting - mybikefitting.com',
      priority: {
        high: 'Prioridad alta',
        medium: 'Prioridad media',
        low: 'Prioridad baja',
      },
      current: 'Actual',
      recommended: 'Recomendado',
      adjustment: 'Ajuste',
      directions: {
        up: 'Subir',
        down: 'Bajar',
        forward: 'Adelantar',
        backward: 'Retrasar',
        shorter: 'Acortar',
        longer: 'Alargar',
      },
      photoLimitationHint: 'Para un ajuste preciso en cm, utiliza el análisis de vídeo o webcam',
      viewLarger: 'Ver más grande',
      clickToClose: 'Haz clic para cerrar',
      angles: {
        knee: 'Rodilla',
        hip: 'Cadera',
        back: 'Espalda',
        arm: 'Brazo',
      },
      angleStatus: {
        optimal: 'Óptimo',
        warning: 'A ajustar',
        bad: 'A corregir',
      },
      adjustmentsRecommended: 'Ajustes recomendados:',
      items: {
        saddleHeightLow: 'Subir altura del sillín',
        saddleHeightLowDesc: 'Tu extensión de rodilla es muy baja. Un sillín demasiado bajo puede causar dolor de rodilla.',
        saddleHeightHigh: 'Bajar altura del sillín',
        saddleHeightHighDesc: 'Tu extensión de rodilla es muy alta. Un sillín demasiado alto puede causar balanceo de cadera.',
        saddleSetback: 'Ajustar retroceso del sillín',
        saddleSetbackDesc: 'Tu ángulo de cadera está muy cerrado. Esto puede limitar la potencia y causar dolor.',
        handlebarHeightLow: 'Subir el manillar',
        handlebarHeightLowDesc: 'Tu posición es demasiado agresiva. Esto puede causar dolor de cuello y espalda.',
        handlebarHeightHigh: 'Bajar el manillar',
        handlebarHeightHighDesc: 'Tu posición está muy erguida. Esto puede reducir la aerodinámica.',
        stemLength: 'Potencia demasiado corta',
        stemLengthDesc: 'Tus brazos están muy doblados. Considera una potencia más larga.',
        painKnees: 'Dolor de rodillas',
        painKneesDesc: 'Verifica la altura del sillín y la posición de las calas.',
        painBack: 'Dolor de espalda',
        painBackDesc: 'Prueba una posición más erguida. Fortalece tu core.',
        painNeck: 'Dolor de cuello',
        painNeckDesc: 'Posición demasiado agresiva. Sube el manillar.',
        painHands: 'Entumecimiento de manos',
        painHandsDesc: 'Demasiado peso en las manos. Verifica la inclinación del manillar.',
        painFeet: 'Dolor en los pies',
        painFeetDesc: 'Verifica la posición de tus calas y el ancho de tus zapatillas.',
        beginnerPosition: 'Posición de confort recomendada',
        beginnerPositionDesc: 'Como principiante, prioriza una posición más erguida.',
      },
    },

    // Angles (legacy)
    angles: {
      knee: 'Rodilla',
      hip: 'Cadera',
      back: 'Espalda',
      arm: 'Brazo',
    },

    // Feedback
    feedback: {
      title: '¡Tu opinión importa!',
      subtitle: '¿Cómo fue tu experiencia de análisis?',
      placeholder: '¿Algún comentario? (opcional)',
      submit: 'Enviar',
      skip: 'Saltar',
      thanks: '¡Gracias por tu opinión!',
    },

    // Footer
    footer: {
      tagline: 'Optimiza tu posición ciclista',
      navigation: 'Navegación',
      startEvaluation: 'Comenzar',
      quiz: 'Cuestionario',
      analysis: 'Análisis',
      legal: 'Información legal',
      cgu: 'Términos de uso',
      privacy: 'Política de privacidad',
      mentions: 'Aviso legal',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },

    // 404 Page
    notFound: {
      title: 'Página no encontrada',
      message: 'La página que buscas no existe o ha sido movida.',
      backHome: 'Volver al inicio',
      startEvaluation: 'Comenzar evaluación',
    },

    // Cookies
    cookies: {
      message: 'Este sitio utiliza cookies para mejorar tu experiencia. Tus datos permanecen en tu dispositivo.',
      learnMore: 'Más información',
      accept: 'Aceptar',
      decline: 'Rechazar',
    },

    // Legal pages
    legal: {
      cgu: {
        title: 'Términos y Condiciones de Uso',
        lastUpdate: 'Última actualización',
        sections: {
          acceptance: {
            title: 'Aceptación de los términos',
            content: 'Al utilizar MyBikeFitting, aceptas estos términos de uso. Si no estás de acuerdo, por favor no utilices este servicio.',
          },
          service: {
            title: 'Descripción del servicio',
            content: 'MyBikeFitting es una herramienta de análisis de posición ciclista que utiliza detección de pose por webcam. El servicio proporciona recomendaciones personalizadas basadas en el análisis de tus ángulos articulares y respuestas al cuestionario.',
          },
          usage: {
            title: 'Uso del servicio',
            content: 'Te comprometes a utilizar este servicio únicamente para fines personales y no comerciales. El uso de la cámara requiere tu consentimiento explícito.',
          },
          data: {
            title: 'Datos personales',
            content: 'Todos tus datos se almacenan localmente en tu dispositivo (localStorage). Ningún dato se transmite a nuestros servidores. Las imágenes de la cámara se procesan en tiempo real y nunca se graban.',
          },
          liability: {
            title: 'Limitación de responsabilidad',
            content: 'MyBikeFitting proporciona recomendaciones solo con fines informativos. Estas recomendaciones no sustituyen el consejo de un profesional de bikefitting. Declinamos toda responsabilidad por lesiones resultantes de aplicar estas recomendaciones.',
          },
          modifications: {
            title: 'Modificaciones',
            content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor una vez publicados en el sitio.',
          },
        },
      },
      privacy: {
        title: 'Política de Privacidad',
        lastUpdate: 'Última actualización',
        sections: {
          collection: {
            title: 'Datos recopilados',
            content: 'MyBikeFitting solo recopila datos que proporcionas voluntariamente: respuestas del cuestionario (nivel, objetivos, dolores) y medidas corporales (altura, entrepierna).',
          },
          camera: {
            title: 'Uso de la cámara',
            content: 'El acceso a la cámara se utiliza únicamente para el análisis de posición en tiempo real. Las imágenes nunca se graban ni transmiten. El procesamiento se realiza completamente en tu dispositivo mediante la tecnología MediaPipe.',
          },
          storage: {
            title: 'Almacenamiento de datos',
            content: 'Todos tus datos se almacenan localmente en el localStorage de tu navegador. Ningún dato se envía a servidores externos. Puedes eliminar estos datos en cualquier momento borrando los datos de navegación.',
          },
          cookies: {
            title: 'Cookies',
            content: 'MyBikeFitting solo utiliza cookies técnicas esenciales para recordar tus preferencias de idioma y consentimiento de cookies. No se utilizan cookies de seguimiento o publicidad.',
          },
          rights: {
            title: 'Tus derechos',
            content: 'Según el RGPD, tienes derecho a acceder, rectificar y eliminar tus datos. Como tus datos se almacenan localmente, puedes eliminarlos directamente desde la configuración de tu navegador.',
          },
          contact: {
            title: 'Contacto',
            content: 'Para cualquier pregunta sobre tus datos personales, contáctanos en: contact@mybikefitting.com',
          },
        },
      },
      mentions: {
        title: 'Aviso Legal',
        sections: {
          editor: {
            title: 'Editor del sitio',
            name: 'Nombre',
            status: 'Estado',
            statusValue: 'Proyecto personal',
            email: 'Email',
          },
          hosting: {
            title: 'Alojamiento',
            provider: 'Proveedor',
            address: 'Dirección',
          },
          ip: {
            title: 'Propiedad intelectual',
            content: 'Todo el contenido de este sitio (textos, imágenes, código) está protegido por derechos de autor. Queda prohibida toda reproducción sin autorización.',
          },
          credits: {
            title: 'Créditos',
            mediapipe: 'Detección de pose: MediaPipe (Google)',
            nextjs: 'Framework: Next.js (Vercel)',
          },
        },
      },
    },

    // Errors
    errors: {
      cameraAccessDenied: 'Acceso a la cámara denegado. Permite el acceso en tu navegador.',
      noCamera: 'No se detectó ninguna cámara.',
      initError: 'No se pudo inicializar la detección.',
    },

    // Suggestions
    suggestions: {
      title: 'Tus ideas',
      subtitle: 'Sugiere mejoras o vota por las ideas existentes',
      cta: '¿Tienes una idea? ¡Proponla!',
      newIdea: 'Sugerir una idea',
      ideaTitle: 'Título de tu idea',
      ideaDescription: 'Descripción (opcional)',
      yourEmail: 'Tu email',
      submit: 'Enviar',
      submitting: 'Enviando...',
      success: '¡Gracias por tu sugerencia!',
      error: 'Ocurrió un error',
      vote: 'Votar',
      votes: 'votos',
      noSuggestions: 'Aún no hay sugerencias. ¡Sé el primero!',
      emailHint: 'Para mantenerte informado del progreso',
      status: {
        pending: 'Pendiente',
        planned: 'Planificado',
        inProgress: 'En progreso',
        done: 'Terminado',
      },
    },

    // Cleat positioning
    cleatPositioning: {
      title: 'Posicionamiento de calas',
      subtitle: 'Guía para posicionar correctamente las calas de tus zapatillas',
      intro: 'Un buen posicionamiento de las calas es esencial para evitar dolor de rodillas y optimizar tu pedaleo.',
      steps: {
        step1: {
          title: 'Encuentra la bola del pie',
          description: 'La cabeza del primer metatarso (bola del pie) debe estar sobre el eje del pedal. Marca este punto en el lado de tu zapatilla.',
        },
        step2: {
          title: 'Posiciona la cala adelante/atrás',
          description: 'Alinea el centro de la cala con la marca que hiciste. Si tienes dolor en la parte delantera de la rodilla, mueve la cala ligeramente hacia atrás.',
        },
        step3: {
          title: 'Ajusta la rotación',
          description: 'Siéntate y deja que tus pies cuelguen naturalmente. La cala debe permitir que tu pie mantenga esta orientación natural.',
        },
        step4: {
          title: 'Posición medial/lateral',
          description: 'Tus rodillas deben mantenerse alineadas durante el pedaleo. Si tus rodillas se mueven hacia afuera, acerca las calas al borde interior de la zapatilla.',
        },
      },
      tips: {
        title: 'Consejos importantes',
        tip1: 'Aprieta los tornillos gradualmente y de manera uniforme',
        tip2: 'Haz una prueba corta después de cada ajuste',
        tip3: 'Ajusta en pequeños incrementos (2-3mm máx)',
        tip4: 'La incomodidad puede tardar varias salidas en manifestarse',
      },
      painGuide: {
        title: 'Guía de dolor',
        frontKnee: {
          title: 'Dolor delantero de rodilla',
          solution: 'Cala muy adelante → Mueve la cala hacia atrás',
        },
        backKnee: {
          title: 'Dolor trasero de rodilla',
          solution: 'Cala muy atrás → Mueve la cala hacia adelante',
        },
        insideKnee: {
          title: 'Dolor interior de rodilla',
          solution: 'Pie apuntando muy hacia afuera → Gira la cala hacia adentro',
        },
        outsideKnee: {
          title: 'Dolor exterior de rodilla',
          solution: 'Pie apuntando muy hacia adentro → Gira la cala hacia afuera',
        },
      },
      backToResults: 'Volver a los resultados',
    },
  },
};

type Translations = typeof translations.fr;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'fr';

  const browserLang = navigator.language?.toLowerCase() || '';

  // Check for exact or partial match
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('de')) return 'de';
  // Default to French
  return 'fr';
}

interface I18nProviderProps {
  children: ReactNode;
  initialLang?: Language;
}

export function I18nProvider({ children, initialLang }: I18nProviderProps) {
  const [lang, setLang] = useState<Language>(initialLang || 'fr');

  // Sync with URL language on mount
  useEffect(() => {
    if (initialLang) {
      setLang(initialLang);
      localStorage.setItem('mybikefitting_lang', initialLang);
      document.cookie = `mybikefitting_lang=${initialLang};path=/;max-age=${60 * 60 * 24 * 365}`;
    }
  }, [initialLang]);

  const handleSetLang = (newLang: Language) => {
    const oldLang = lang;
    setLang(newLang);
    localStorage.setItem('mybikefitting_lang', newLang);
    document.cookie = `mybikefitting_lang=${newLang};path=/;max-age=${60 * 60 * 24 * 365}`;
    trackLanguageChange(oldLang, newLang);
    // Redirect to new language URL
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(fr|en|es|de)/, '');
    window.location.href = `/${newLang}${pathWithoutLang || '/'}`;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

const languageFlags: Record<Language, string> = {
  fr: '🇫🇷',
  en: '🇺🇸',
  es: '🇪🇸',
  de: '🇩🇪',
};

const languageNames: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
};

export function LanguageSelector() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex gap-1 sm:gap-2">
      {(['fr', 'en', 'es', 'de'] as Language[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          title={languageNames[l]}
          className={`px-2 py-1 sm:px-3 sm:py-1.5 text-base sm:text-lg rounded-lg transition-all cursor-pointer ${
            lang === l
              ? 'bg-amber-100 ring-2 ring-amber-500 scale-110'
              : 'bg-stone-100 hover:bg-stone-200'
          }`}
          aria-label={`Switch to ${l.toUpperCase()}`}
        >
          {languageFlags[l]}
        </button>
      ))}
    </div>
  );
}
