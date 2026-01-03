"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react"
interface TeamMemberTranslation {
  name: {
    en: string;
    de: string;
    it: string;
  };
  specialty: {
    en: string;
    de: string;
    it: string;
  };
  bio: {
    en: string;
    de: string;
    it: string;
  };
  philosophy: {
    en: string;
    de: string;
    it: string;
  };
}

interface TeamMember {
  id: string;
  experience: string;
  image: string;
  gradient: string;
  aura: string;
  expertise: string[];
  email: string;
  languages: string[];
  translations: TeamMemberTranslation;
}

// Define team members with their translations included
// This makes it easier to add/remove team members as all data is in one place
const teamMembers: TeamMember[] = [
  {
    id: "giulia",
    experience: "10",
    image: "/images/giulia.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["Hatha Yoga Certified", "Health Insurance Recognized", "10+ Years Experience", "Prenatal Yoga (7 Years)"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["English", "Italian", "German"],
    translations: {
      name: {
        en: "Giulia",
        de: "Giulia",
        it: "Giulia",
      },
      specialty: {
        en: "Mindful Yoga",
        de: "Achtsames Yoga",
        it: "Yoga Mindful",
      },
      bio: {
        en: "Yoga begins with something as simple as a breath—and from there, it becomes a practice of listening, feeling, and being present.\n\nIn each class, I invite you to explore the sensations, emotions, and thoughts that arise, observing them with kindness and without judgment (yes, even those random thoughts that pop up mid-headstand—like can't wait to get pizza later and a cold beer!).\n\nEvery session feels different because the energy and flow come from the group. I focus on how deep, mindful breathing helps us relax into stretches, find strength amid challenge, and develop equanimity—a calm, steady mind that stays balanced through life's ups and downs.\n\nRather than aiming for perfect shapes or performance, we practice meeting ourselves where we are—through awareness, not achievement. This calm attention becomes a natural path toward meditation—the quiet observer within.\n\nMy own path into yoga began through meditation and mindfulness. I discovered how powerful these practices were in bringing awareness and clarity into my life, and yoga felt like a natural step into this world—a way to access presence through movement.\n\nI've never quite seen myself as a \"teacher,\" but more as a fellow student—curious and always learning. Every class is a space for shared discovery, where we explore the body and mind together.\n\nThough I'm certified in Hatha Yoga (and recognized by health insurance providers), my teaching has been shaped by a wide range of influences over the past ten years—including vinyasa, ashtanga, yin, kundalini, and elements of dance. I enjoy creating classes where different forms can flow together naturally and intuitively.\n\nI've also been teaching prenatal yoga for the past seven years.\n\nYou're welcome to come as you are and discover what your practice brings to you.",
        de: "Yoga beginnt mit etwas so Einfachem wie einem Atemzug—und von dort wird es zu einer Praxis des Zuhörens, Fühlens und Präsent-Seins.\n\nIn jeder Stunde lade ich dich ein, die Empfindungen, Emotionen und Gedanken zu erkunden, die aufkommen, sie mit Freundlichkeit und ohne Urteil zu beobachten (ja, sogar diese zufälligen Gedanken, die mitten im Kopfstand auftauchen—wie ich kann es kaum erwarten, später Pizza und ein kaltes Bier zu bekommen!).\n\nJede Stunde fühlt sich anders an, weil die Energie und der Fluss von der Gruppe kommen. Ich konzentriere mich darauf, wie tiefes, achtsames Atmen uns hilft, uns in Dehnungen zu entspannen, Kraft inmitten von Herausforderungen zu finden und Gleichmut zu entwickeln—einen ruhigen, stetigen Geist, der durch die Höhen und Tiefen des Lebens ausgeglichen bleibt.\n\nAnstatt perfekte Formen oder Leistung anzustreben, üben wir, uns dort zu begegnen, wo wir sind—durch Bewusstsein, nicht durch Leistung. Diese ruhige Aufmerksamkeit wird zu einem natürlichen Weg zur Meditation—dem stillen Beobachter in uns.\n\nMein eigener Weg zum Yoga begann durch Meditation und Achtsamkeit. Ich entdeckte, wie kraftvoll diese Praktiken waren, um Bewusstsein und Klarheit in mein Leben zu bringen, und Yoga fühlte sich wie ein natürlicher Schritt in diese Welt an—ein Weg, Präsenz durch Bewegung zu erreichen.\n\nIch habe mich nie ganz als \"Lehrerin\" gesehen, sondern eher als Mitstudentin—neugierig und immer lernend. Jede Stunde ist ein Raum für gemeinsame Entdeckung, wo wir Körper und Geist zusammen erkunden.\n\nObwohl ich in Hatha Yoga zertifiziert bin (und von Krankenkassen anerkannt), wurde mein Unterricht in den letzten zehn Jahren von einer Vielzahl von Einflüssen geprägt—einschließlich Vinyasa, Ashtanga, Yin, Kundalini und Elementen des Tanzes. Ich genieße es, Stunden zu kreieren, in denen verschiedene Formen natürlich und intuitiv zusammenfließen können.\n\nIch unterrichte auch seit sieben Jahren Pränatal-Yoga.\n\nDu bist willkommen, so zu kommen, wie du bist, und zu entdecken, was deine Praxis dir bringt.",
        it: "Lo yoga inizia con qualcosa di semplice come un respiro—e da lì diventa una pratica di ascolto, sentire ed essere presenti.\n\nIn ogni lezione, ti invito a esplorare le sensazioni, le emozioni e i pensieri che sorgono, osservandoli con gentilezza e senza giudizio (sì, anche quei pensieri casuali che spuntano a metà verticale—come non vedo l'ora di mangiare pizza più tardi e una birra fredda!).\n\nOgni sessione si sente diversa perché l'energia e il flusso vengono dal gruppo. Mi concentro su come la respirazione profonda e consapevole ci aiuta a rilassarci negli allungamenti, trovare forza nelle sfide e sviluppare equanimità—una mente calma e stabile che rimane equilibrata attraverso gli alti e bassi della vita.\n\nPiuttosto che mirare a forme perfette o prestazioni, pratichiamo l'incontrarci dove siamo—attraverso la consapevolezza, non il risultato. Questa attenzione calma diventa un percorso naturale verso la meditazione—l'osservatore silenzioso dentro di noi.\n\nIl mio percorso nello yoga è iniziato attraverso la meditazione e la mindfulness. Ho scoperto quanto fossero potenti queste pratiche nel portare consapevolezza e chiarezza nella mia vita, e lo yoga si è sentito come un passo naturale in questo mondo—un modo per accedere alla presenza attraverso il movimento.\n\nNon mi sono mai vista come una \"insegnante\", ma più come una compagna di studi—curiosa e sempre in apprendimento. Ogni lezione è uno spazio per la scoperta condivisa, dove esploriamo il corpo e la mente insieme.\n\nAnche se sono certificata in Hatha Yoga (e riconosciuta dai fornitori di assicurazione sanitaria), il mio insegnamento è stato plasmato da una vasta gamma di influenze negli ultimi dieci anni—inclusi vinyasa, ashtanga, yin, kundalini ed elementi di danza. Mi piace creare lezioni dove diverse forme possono fluire insieme naturalmente e intuitivamente.\n\nInsegno anche yoga prenatale da sette anni.\n\nSei il benvenuto a venire come sei e scoprire cosa la tua pratica ti porta.",
      },
      philosophy: {
        en: "Rather than aiming for perfect shapes or performance, we practice meeting ourselves where we are—through awareness, not achievement. This calm attention becomes a natural path toward meditation—the quiet observer within.",
        de: "Anstatt perfekte Formen oder Leistung anzustreben, üben wir, uns dort zu begegnen, wo wir sind—durch Bewusstsein, nicht durch Leistung. Diese ruhige Aufmerksamkeit wird zu einem natürlichen Weg zur Meditation—dem stillen Beobachter in uns.",
        it: "Piuttosto che mirare a forme perfette o prestazioni, pratichiamo l'incontrarci dove siamo—attraverso la consapevolezza, non il risultato. Questa attenzione calma diventa un percorso naturale verso la meditazione—l'osservatore silenzioso dentro di noi.",
      },
    },
  },
  {
    id: "alica",
    experience: "5",
    image: "/images/alica.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["Physiotherapist", "Yin Yoga", "Sound Healing", "Prenatal and Postnatal"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["German", "English"],
    translations: {
      name: {
        en: "Alica",
        de: "Alica",
        it: "Alica",
      },
      specialty: {
        en: "Yoga & Sound",
        de: "Yoga & Klang",
        it: "Yoga & Suono",
      },
      bio: {
        en: "I am Alica – a yoga teacher and physiotherapist with a special focus on relaxation and mindfulness.\n\nFor me, yoga means creating a space where we can let go - physically and emotionally.\n\nIn my classes, I combine Yin Yoga with Tibetan singing bowls for deep relaxation.\n\nI also regularly offer workshops where I combine Yin Yoga with singing bowl massage. This is a very special experience where you can feel the vibrations of the bowls directly on your body.\n\nMy classes are calm, clear, and lovingly guided.",
        de: "Ich bin Alica – Yogalehrerin und Physiotherapeutin mit einem besonderen Fokus auf Entspannung und Achtsamkeit.\n\nYoga bedeutet für mich, einen Raum zu schaffen, in dem wir loslassen dürfen - körperlich und emotional.\n\nIn meinen Stunden verbinde ich Yin Yoga mit tibetischen Klangschalen für eine tiefgehende Entspannung.\n\nZudem biete ich regelmäßig Workshops an, in denen ich Yin Yoga mit Klangschalenmassage kombiniere. Das ist ein ganz besonderes Erlebnis, bei dem du die Vibrationen der Schalen direkt auf dem Körper spürst.\n\nMeine Stunden sind ruhig, klar und liebevoll begleitet.",
        it: "Sono Alica – insegnante di yoga e fisioterapista con un focus particolare su rilassamento e consapevolezza.\n\nPer me, lo yoga significa creare uno spazio in cui possiamo lasciar andare - fisicamente ed emotivamente.\n\nNelle mie lezioni, combino lo Yin Yoga con le campane tibetane per un rilassamento profondo.\n\nOffro anche regolarmente workshop in cui combino lo Yin Yoga con il massaggio con campane. Questa è un'esperienza molto speciale in cui puoi sentire le vibrazioni delle campane direttamente sul corpo.\n\nLe mie lezioni sono calme, chiare e amorevolmente guidate.",
      },
      philosophy: {
        en: "Yoga means creating a space where we can let go - physically and emotionally. My classes are calm, clear, and lovingly guided.",
        de: "Yoga bedeutet für mich, einen Raum zu schaffen, in dem wir loslassen dürfen - körperlich und emotional. Meine Stunden sind ruhig, klar und liebevoll begleitet.",
        it: "Per me, lo yoga significa creare uno spazio in cui possiamo lasciar andare - fisicamente ed emotivamente. Le mie lezioni sono calme, chiare e amorevolmente guidate.",
      },
    },
  },
  {
    id: "larissa",
    experience: "6",
    image: "/images/larissa.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["Resource-Oriented Therapist", "Trauma-Sensitive Yoga", "15+ Years Practice"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["German", "English"],
    translations: {
      name: {
        en: "Larissa",
        de: "Larissa",
        it: "Larissa",
      },
      specialty: {
        en: "Hatha Yoga",
        de: "Hatha Yoga",
        it: "Hatha Yoga",
      },
      bio: {
        en: "Yoga to me is like an anchor. The practice and spiritual teaching of Yoga have played an important role in my life for more than 15 years. It simply helps me to navigate the waves of life and being.\n\nIn 2017, I decided to go to Kerala, India to do a Hatha Yoga teacher training to dive deeper into the practice that had already taught me so much. Since 2018, as part of Citizen2be, I have been able to experience new perspectives of teaching and practicing Yoga again and again by offering trauma-sensitive classes for women on a voluntary basis.\n\nAs a resource-oriented therapist, it is very close to my heart to accompany people in turning to themselves with openness, so that with this open attitude they can also meet life and others with benevolence.\n\nBy practicing yoga we do not only unite body, mind and soul, we also have the chance to connect with others and our community authentically and whole-heartedly. This way we learn to return to the anchor within ourselves — no matter how heavy the storms of our mind or life might be.",
        de: "Yoga ist für mich wie ein Anker. Die Praxis und spirituelle Lehre des Yoga spielen seit mehr als 15 Jahren eine wichtige Rolle in meinem Leben. Es hilft mir einfach, die Wellen des Lebens und des Seins zu navigieren.\n\n2017 entschied ich mich, nach Kerala, Indien zu gehen, um eine Hatha Yoga Lehrerausbildung zu absolvieren und tiefer in die Praxis einzutauchen, die mich bereits so viel gelehrt hatte. Seit 2018 darf ich als Teil von Citizen2be immer wieder neue Perspektiven des Lehrens und Praktizierens von Yoga erleben, indem ich ehrenamtlich trauma-sensible Klassen für Frauen anbiete.\n\nAls ressourcenorientierte Therapeutin liegt es mir sehr am Herzen, Menschen darin zu begleiten, sich selbst mit Offenheit zuzuwenden, damit sie mit dieser offenen Haltung auch dem Leben und anderen mit Wohlwollen begegnen können.\n\nDurch die Praxis von Yoga vereinen wir nicht nur Körper, Geist und Seele, wir haben auch die Chance, uns authentisch und von ganzem Herzen mit anderen und unserer Gemeinschaft zu verbinden. Auf diese Weise lernen wir, zum Anker in uns selbst zurückzukehren — egal wie schwer die Stürme unseres Geistes oder Lebens auch sein mögen.",
        it: "Lo yoga per me è come un'ancora. La pratica e l'insegnamento spirituale dello yoga hanno svolto un ruolo importante nella mia vita per più di 15 anni. Semplicemente mi aiuta a navigare le onde della vita e dell'essere.\n\nNel 2017, ho deciso di andare in Kerala, India, per fare una formazione per insegnanti di Hatha Yoga per immergermi più profondamente nella pratica che mi aveva già insegnato così tanto. Dal 2018, come parte di Citizen2be, ho potuto sperimentare continuamente nuove prospettive di insegnamento e pratica dello yoga offrendo classi sensibili al trauma per donne su base volontaria.\n\nCome terapeuta orientata alle risorse, mi sta molto a cuore accompagnare le persone nel rivolgersi a se stesse con apertura, così che con questo atteggiamento aperto possano anche incontrare la vita e gli altri con benevolenza.\n\nPraticando lo yoga non solo uniamo corpo, mente e anima, ma abbiamo anche la possibilità di connetterci con gli altri e la nostra comunità in modo autentico e di tutto cuore. In questo modo impariamo a tornare all'ancora dentro di noi — non importa quanto pesanti possano essere le tempeste della nostra mente o della nostra vita.",
      },
      philosophy: {
        en: "Simply put, in practicing Yoga, we unite body, mind and soul. The moment we mindfully connect with ourselves, we come home. We learn to return to our strength and confidence, as well as to our softness and vulnerability. We meet ourselves where we are and return to our inner truth and light on the mat — and beyond.",
        de: "Einfach gesagt, in der Praxis des Yoga vereinen wir Körper, Geist und Seele. In dem Moment, in dem wir uns achtsam mit uns selbst verbinden, kommen wir nach Hause. Wir lernen, zu unserer Kraft und Zuversicht zurückzukehren, sowie zu unserer Weichheit und Verletzlichkeit. Wir begegnen uns dort, wo wir sind, und kehren zu unserer inneren Wahrheit und unserem Licht auf der Matte zurück — und darüber hinaus.",
        it: "In poche parole, praticando lo yoga, uniamo corpo, mente e anima. Nel momento in cui ci connettiamo con consapevolezza a noi stessi, torniamo a casa. Impariamo a tornare alla nostra forza e fiducia, così come alla nostra dolcezza e vulnerabilità. Ci incontriamo dove siamo e torniamo alla nostra verità interiore e luce sul tappetino — e oltre.",
      },
    },
  },
  {
    id: "isa",
    experience: "7",
    image: "/images/isa.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["Jivamukti Yoga (300h)", "Talia Sutra Influenced", "Dylan Werner Influenced", "Isha Yoga Influenced", "Hand-on-Assistenz"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["German", "English"],
    translations: {
      name: {
        en: "ISa",
        de: "ISa",
        it: "ISa",
      },
      specialty: {
        en: "Jivamukti Yoga",
        de: "Jivamukti Yoga",
        it: "Jivamukti Yoga",
      },
      bio: {
        en: "I am fascinated by the currents between the inner and the outer. Both consciously and unconsciously, we store every experience—LIFE, which flows through us like waves. We have the opportunity to become aware of this, to bring connections to light, and to create inner maps. This leads to unity—Yoga.\n\nMy yogic practices are meant to meet you where you are and guide you step by step, courageously into the depths. I want to explore the self in the outer with you and practice letting go, so that we can also live the vulnerable in us openly in the outer. This can be an adventurous journey where we reach sacred places that require our full attention. Only playfully, listening, breathing deeply, and with continuity do we reach these points.\n\nWe affirm all our problems, fears, and insecurities, for they are the adventures we learn to face gently, patiently, and consistently. They make us seekers and enable us to explore life deeply.\n\nJivamukti Classes\n\nI myself have so many questions about life, and there are several milestones that led me to practice Yoga as a \"space holder\" as well. One of these milestones is that I stumbled into a Jivamukti studio in 2012. This method opened important doors for me toward a self-determined, active, and healthy life—not only for me, but also for my environment. That's why I completed the 300h Jivamukti Yoga training in India with Sharon Gannon and Moritz Ulrich five years later.\n\nMy Jivamukti classes are dynamic and holistic. They consist of rhythmic, flowing, powerful, and stretching asana sequences. We will breathe and meditate while simultaneously engaging with the origins of yoga. The goal of the class is to enable intensive body experiences that lead us inward and invite us to connect with questions and insights about ourselves and life. During the class, I experience myself as part of the practicing group.\n\nAlternative Class Formats\n\nMy yoga is also shaped by Talia Sutra, Dylan Werner, and especially Isha Yoga. In my other classes, I deviate a bit from the Jivamukti method to bring a certain aspect more into focus. These classes are like mini-workshops or small routines.\n\nDuring the class, I offer considerate and supportive hand-on-assistance.",
        de: "Ich bin fasziniert von den Strömungen zwischen dem Inneren und dem Äußeren. Sowohl bewusst als auch unbewusst speichern wir jede Erfahrung – LEBEN, das wie Wellen durch uns fließt. Wir haben die Möglichkeit, uns dessen bewusst zu werden, Verbindungen zum Leuchten zu bringen und innere Landkarten zu erschaffen. Dies führt zur Einheit – Yoga.\n\nMeine yogischen Praktiken sollen dich dort abholen, wo du stehst, und dich Schritt für Schritt mutig in die Tiefe führen. Ich möchte mit euch das Selbst im Außen kennenlernen und Loslassen üben, um auch das Verletzliche in uns offen im Außen zu leben. Dies kann ein abenteuerlicher Ritt sein, bei dem wir zu heiligen Orten gelangen, die unsere volle Aufmerksamkeit erfordern. Nur spielerisch, lauschend, tief atmend und mit Kontinuität erreichen wir diese Punkte.\n\nAlle unsere Probleme, Ängste und Unsicherheiten bejahen wir, denn sie sind die Abenteuer, denen wir uns sanft, geduldig und beständig stellen lernen. Sie machen uns zu Suchenden und ermöglichen es uns, das Leben tief zu ergründen.\n\nJivamukti-Klassen\n\nIch selbst habe so viele Fragen ans Leben und es gibt einige Meilensteine, die mich dorthin führten, Yoga nun auch als \"Raumhaltende\" zu praktizieren. Einer dieser Meilensteine ist, dass ich 2012 in ein Jivamukti-Studio stolperte. Diese Methode öffnete mir wichtige Türen hin zu ein selbstbestimmten, aktiven und gesunden Leben - nicht nur für mich, sondern auch für mein Umfeld. Deshalb machte ich 5 Jahre später die 300h Jivamukti Yoga Ausbildung in Indien bei Sharon Gannon und Moritz Ulrich.\n\nMeine Jivamukti-Klassen sind dynamisch und ganzheitlich. Sie bestehen aus rhythmischen, fließenden, kraftvollen und dehnenden Asana-Sequenzen. Wir werden atmen und meditieren, während wir uns gleichzeitig mit den Ursprüngen des Yoga auseinandersetzen. Ziel der Klasse ist es, intensive Körpererfahrungen zu ermöglichen, die uns nach innen führen und dazu einladen, uns mit Fragen und Erkenntnissen über uns selbst und das Leben zu verbinden. Während der Klasse empfinde ich mich als Teil der praktizierenden Gruppe.\n\nAbweichende Klassenformate\n\nMein Yoga ist außerdem geprägt von Talia Sutra, Dylan Werner und ganz besonders von Isha Yoga. In meinen anderen Klassen weiche ich ein wenig von der Jivamukti-Methode ab, um einen bestimmten Aspekt stärker in den Fokus zu rücken. Diese Klassen sind wie Mini-Workshops oder kleine Routinen.\n\nWährend der Klasse biete ich rücksichtsvolle und unterstützende Hand-on-Assistenz an.",
        it: "Sono affascinata dalle correnti tra l'interno e l'esterno. Sia consapevolmente che inconsapevolmente, immagazziniamo ogni esperienza - la VITA, che fluisce attraverso di noi come onde. Abbiamo l'opportunità di diventarne consapevoli, di portare le connessioni alla luce e di creare mappe interiori. Questo porta all'unità - lo Yoga.\n\nLe mie pratiche yogiche sono pensate per incontrarti dove sei e guidarti passo dopo passo, coraggiosamente nelle profondità. Voglio esplorare il sé nell'esterno con te e praticare il lasciar andare, così che possiamo anche vivere il vulnerabile in noi apertamente nell'esterno. Questo può essere un viaggio avventuroso dove raggiungiamo luoghi sacri che richiedono la nostra piena attenzione. Solo giocosamente, ascoltando, respirando profondamente e con continuità raggiungiamo questi punti.\n\nAffermiamo tutti i nostri problemi, paure e insicurezze, perché sono le avventure che impariamo ad affrontare con dolcezza, pazienza e costanza. Ci rendono cercatori e ci permettono di esplorare la vita in profondità.\n\nClassi Jivamukti\n\nIo stessa ho così tante domande sulla vita, e ci sono diversi traguardi che mi hanno portato a praticare lo Yoga come \"detentore di spazio\" anche io. Uno di questi traguardi è che sono incappata in uno studio Jivamukti nel 2012. Questo metodo mi ha aperto porte importanti verso una vita autodeterminata, attiva e sana - non solo per me, ma anche per il mio ambiente. Ecco perché ho completato la formazione di 300h di Jivamukti Yoga in India con Sharon Gannon e Moritz Ulrich cinque anni dopo.\n\nLe mie classi Jivamukti sono dinamiche e olistiche. Consistono di sequenze di asana ritmiche, fluenti, potenti e allunganti. Respireremo e mediteremo mentre ci impegniamo simultaneamente con le origini dello yoga. L'obiettivo della classe è consentire esperienze corporee intensive che ci portano verso l'interno e ci invitano a connetterci con domande e intuizioni su noi stessi e la vita. Durante la classe, mi sento parte del gruppo praticante.\n\nFormati di Classe Alternativi\n\nIl mio yoga è anche plasmato da Talia Sutra, Dylan Werner e soprattutto Isha Yoga. Nelle mie altre classi, devio un po' dal metodo Jivamukti per portare un certo aspetto più in primo piano. Queste classi sono come mini-workshop o piccole routine.\n\nDurante la classe, offro assistenza manuale premurosa e di supporto.",
      },
      philosophy: {
        en: "I am fascinated by the currents between the inner and the outer. We have the opportunity to become aware of this, to bring connections to light, and to create inner maps. This leads to unity—Yoga. We affirm all our problems, fears, and insecurities, for they are the adventures we learn to face gently, patiently, and consistently.",
        de: "Ich bin fasziniert von den Strömungen zwischen dem Inneren und dem Äußeren. Wir haben die Möglichkeit, uns dessen bewusst zu werden, Verbindungen zum Leuchten zu bringen und innere Landkarten zu erschaffen. Dies führt zur Einheit – Yoga. Alle unsere Probleme, Ängste und Unsicherheiten bejahen wir, denn sie sind die Abenteuer, denen wir uns sanft, geduldig und beständig stellen lernen.",
        it: "Sono affascinata dalle correnti tra l'interno e l'esterno. Abbiamo l'opportunità di diventarne consapevoli, di portare le connessioni alla luce e di creare mappe interiori. Questo porta all'unità - lo Yoga. Affermiamo tutti i nostri problemi, paure e insicurezze, perché sono le avventure che impariamo ad affrontare con dolcezza, pazienza e costanza.",
      },
    },
  },
  {
    id: "silvia",
    experience: "1+",
    image: "/images/silvia.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["15+ Years Practice", "Hatha Yoga", "Iyengar Yoga", "Anusara Yoga", "Jivamukti Yoga", "Ashtanga Yoga", "Life Science Researcher"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["English", "Portuguese", "German"],
    translations: {
      name: {
        en: "Sílvia",
        de: "Sílvia",
        it: "Sílvia",
      },
      specialty: {
        en: "Hatha & Flow Yoga",
        de: "Hatha & Flow Yoga",
        it: "Hatha & Flow Yoga",
      },
      bio: {
        en: "I began my yoga journey fifteen years ago, practicing traditional Hatha yoga. Over the years, I explored various yoga traditions, Iyengar and Anusara for their precision and alignment, and Jivamukti and Ashtanga for their dynamic flow and devoted structure. Through mindful practice, I discovered how yoga softens the fluctuation of the mind and awakens awareness and compassion toward oneself and the others. Alongside my yoga practice, my path as a life science researcher has shaped a holistic perspective of the human body and mind, combining scientific insight with principles of the yoga tradition. In my classes, I combine dynamic flows with breath awareness and moments of stillness in asanas, inviting others to cultivate both mindful strength and inner calm.",
        de: "Ich begann meine Yoga-Reise vor fünfzehn Jahren mit traditionellem Hatha Yoga. Im Laufe der Jahre erkundete ich verschiedene Yoga-Traditionen: Iyengar und Anusara für ihre Präzision und Ausrichtung, sowie Jivamukti und Ashtanga für ihren dynamischen Flow und ihre hingebungsvolle Struktur. Durch achtsame Praxis entdeckte ich, wie Yoga die Schwankungen des Geistes mildert und Bewusstsein sowie Mitgefühl für sich selbst und andere erweckt. Neben meiner Yoga-Praxis hat mein Weg als Lebenswissenschaftlerin eine ganzheitliche Perspektive auf Körper und Geist geprägt, die wissenschaftliche Erkenntnisse mit Prinzipien der Yoga-Tradition verbindet. In meinen Klassen kombiniere ich dynamische Flows mit Atembewusstsein und Momenten der Stille in Asanas und lade andere ein, sowohl achtsame Stärke als auch innere Ruhe zu kultivieren.",
        it: "Ho iniziato il mio viaggio nello yoga quindici anni fa, praticando lo yoga Hatha tradizionale. Nel corso degli anni, ho esplorato varie tradizioni yoga: Iyengar e Anusara per la loro precisione e allineamento, e Jivamukti e Ashtanga per il loro flusso dinamico e la struttura devota. Attraverso la pratica consapevole, ho scoperto come lo yoga ammorbidisce le fluttuazioni della mente e risveglia la consapevolezza e la compassione verso se stessi e gli altri. Accanto alla mia pratica yoga, il mio percorso come ricercatrice nelle scienze della vita ha plasmato una prospettiva olistica del corpo e della mente umani, combinando intuizioni scientifiche con i principi della tradizione yoga. Nelle mie lezioni, combino flussi dinamici con la consapevolezza del respiro e momenti di quiete nelle asana, invitando gli altri a coltivare sia la forza consapevole che la calma interiore.",
      },
      philosophy: {
        en: "Through mindful practice, yoga softens the fluctuation of the mind and awakens awareness and compassion toward oneself and others. I combine dynamic flows with breath awareness and moments of stillness, inviting others to cultivate both mindful strength and inner calm.",
        de: "Durch achtsame Praxis mildert Yoga die Schwankungen des Geistes und erweckt Bewusstsein sowie Mitgefühl für sich selbst und andere. Ich kombiniere dynamische Flows mit Atembewusstsein und Momenten der Stille und lade andere ein, sowohl achtsame Stärke als auch innere Ruhe zu kultivieren.",
        it: "Attraverso la pratica consapevole, lo yoga ammorbidisce le fluttuazioni della mente e risveglia la consapevolezza e la compassione verso se stessi e gli altri. Combino flussi dinamici con la consapevolezza del respiro e momenti di quiete, invitando gli altri a coltivare sia la forza consapevole che la calma interiore.",
      },
    },
  },
  {
    id: "yulia",
    experience: "5",
    image: "/images/yulia.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["Hatha Vinyasa Yoga", "Vinyasa Flow", "Yin Yoga", "Hands-on Assists", "Pranayama", "14+ Years Yoga Experience"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["German", "English", "Russian", "Dutch", "French"],
    translations: {
      name: {
        en: "Yulia",
        de: "Yulia",
        it: "Yulia",
      },
      specialty: {
        en: "Hatha Vinyasa, Yin Yoga & Pranayama",
        de: "Hatha Vinyasa, Yin Yoga & Pranayama",
        it: "Hatha Vinyasa, Yin Yoga & Pranayama",
      },
      bio: {
        en: "My very first acquaintance with yoga took place when I was a 7-year-old girl discovering yellowish, hand-written notebooks of a distant relative with descriptions and drawings of yoga asanas. I vividly remember being fascinated by them and playfully trying them out.\n\nI reconnected with yoga at the age of 21 and since then have discovered a variety of teachings and styles, including Vinyasa, Hatha, Ashtanga and Yin Yoga. I have completed teacher trainings (300h) in Vinyasa and Yin Yoga.\n\nIn my own dynamic asana practice and in my teaching it aligns most with me to combine dynamic sequences with longer holds of asanas to give the body and the mind the necessary time to find and learn a good alignment.\n\nIn Yin practice I place a focus on deep relaxation, letting go and a re-calibration of the nervous system towards a calmer state.\n\nThroughout the past years, yoga has helped me not only to strengthen my physical health, but to achieve more mental balance, clarity and to establish a better connection with my inner self. Next to physical asana practice, pranayama and meditation are essential to me.",
        de: "Meine allererste Bekanntschaft mit Yoga fand statt, als ich ein 7-jähriges Mädchen war und gelbliche, handgeschriebene Notizbücher einer entfernten Verwandten mit Beschreibungen und Zeichnungen von Yoga-Asanas entdeckte. Ich erinnere mich lebhaft daran, wie fasziniert ich davon war und sie spielerisch ausprobierte.\n\nIch habe mich im Alter von 21 Jahren wieder mit Yoga verbunden und seitdem eine Vielzahl von Lehren und Stilen entdeckt, darunter Vinyasa, Hatha, Ashtanga und Yin Yoga. Ich habe Lehrerausbildungen (300h) in Vinyasa und Yin Yoga abgeschlossen.\n\nIn meiner eigenen dynamischen Asana-Praxis und in meinem Unterricht liegt es mir am meisten, dynamische Sequenzen mit längeren Haltezeiten von Asanas zu kombinieren, um Körper und Geist die notwendige Zeit zu geben, eine gute Ausrichtung zu finden und zu lernen.\n\nIn der Yin-Praxis lege ich den Fokus auf tiefe Entspannung, Loslassen und eine Neuausrichtung des Nervensystems hin zu einem ruhigeren Zustand.\n\nIn den vergangenen Jahren hat mir Yoga nicht nur geholfen, meine körperliche Gesundheit zu stärken, sondern auch mehr mentales Gleichgewicht und Klarheit zu erreichen und eine bessere Verbindung zu meinem inneren Selbst herzustellen. Neben der körperlichen Asana-Praxis sind Pranayama und Meditation für mich wesentlich.",
        it: "Il mio primo incontro con lo yoga è avvenuto quando ero una bambina di 7 anni e ho scoperto dei quaderni giallastri scritti a mano di una parente lontana con descrizioni e disegni di asana yoga. Ricordo vividamente di essere rimasta affascinata e di averle provate giocosamente.\n\nMi sono riconnessa con lo yoga all'età di 21 anni e da allora ho scoperto una varietà di insegnamenti e stili, tra cui Vinyasa, Hatha, Ashtanga e Yin Yoga. Ho completato formazioni per insegnanti (300h) in Vinyasa e Yin Yoga.\n\nNella mia pratica dinamica di asana e nel mio insegnamento, mi allinea meglio combinare sequenze dinamiche con mantenimenti più lunghi delle asana per dare al corpo e alla mente il tempo necessario per trovare e imparare un buon allineamento.\n\nNella pratica Yin pongo l'attenzione sul rilassamento profondo, sul lasciar andare e su una ri-calibrazione del sistema nervoso verso uno stato più calmo.\n\nNel corso degli anni passati, lo yoga mi ha aiutato non solo a rafforzare la mia salute fisica, ma anche a raggiungere più equilibrio mentale, chiarezza e a stabilire una migliore connessione con il mio sé interiore. Accanto alla pratica fisica delle asana, pranayama e meditazione sono essenziali per me.",
      },
      philosophy: {
        en: "I believe in the importance of giving students a solid foundation in their practice in terms of alignment, breath, bandhas and understanding of yoga in order to enable them to build their own healthy and sustainable yoga practice and path over time. I teach with clarity, mindfulness and attention to individual needs and am passionate about seeing people grow and learn.",
        de: "Ich glaube an die Bedeutung, den Schülern eine solide Grundlage in ihrer Praxis in Bezug auf Ausrichtung, Atem, Bandhas und Verständnis von Yoga zu geben, damit sie im Laufe der Zeit ihre eigene gesunde und nachhaltige Yoga-Praxis und ihren eigenen Weg aufbauen können. Ich unterrichte mit Klarheit, Achtsamkeit und Aufmerksamkeit für individuelle Bedürfnisse und bin leidenschaftlich daran interessiert, Menschen wachsen und lernen zu sehen.",
        it: "Credo nell'importanza di dare agli studenti una solida base nella loro pratica in termini di allineamento, respiro, bandha e comprensione dello yoga per consentire loro di costruire la propria pratica e il proprio percorso yoga sano e sostenibile nel tempo. Insegno con chiarezza, consapevolezza e attenzione alle esigenze individuali e sono appassionata nel vedere le persone crescere e imparare.",
      },
    },
  },
  {
    id: "kira",
    experience: "0.5",
    image: "/images/kira.png",
    gradient: "from-[#B69724] to-[#D4B95C]",
    aura: "amber",
    expertise: ["Hatha", "Vinyasa", "Kundalini", "Kaula Tantra"],
    email: "ginkgoyogaberlin@gmail.com",
    languages: ["German", "English", "Spanish"],
    translations: {
      name: {
        en: "Kira",
        de: "Kira",
        it: "Kira",
      },
      specialty: {
        en: "Hatha, Vinyasa & Kaula Tantra Yoga",
        de: "Hatha, Vinyasa & Kaula Tantra Yoga",
        it: "Hatha, Vinyasa & Kaula Tantra Yoga",
      },
      bio: {
        en: "Since 2020, yoga has been an important foundation for me, helping me to connect with myself, my surroundings and my fellow human beings and to be present. Whereas yoga used to be primarily a workout for me, today it is a spiritual practice that allows me to experience peace and relaxation in our fast-paced world, to anchor myself deeply in my body and to connect with my inner strength.\n\nAfter many years of practising Vinyasa, Hatha and Rocket Yoga, I completed two yoga trainings in Hatha, Vinyasa and Kundalini (200 hours) as well as Kaula Tantra Yoga (300 hours) in Colombia and Ecuador. In addition to my passion for powerful and playful flows, I discovered the beauty of slow, conscious practice. Kaula Tantra Yoga is like medicine for me. It is the first yoga practice that has truly relaxed me and put me in a state between waking and sleeping.",
        de: "Seit 2020 ist Yoga für mich eine wichtige Grundlage geworden, die mir hilft, mich mit mir selbst, meiner Umgebung und meinen Mitmenschen zu verbinden und präsent zu sein. Während Yoga für mich früher hauptsächlich ein Workout war, ist es heute eine spirituelle Praxis, die es mir ermöglicht, Frieden und Entspannung in unserer schnelllebigen Welt zu erfahren, mich tief in meinem Körper zu verankern und mich mit meiner inneren Stärke zu verbinden.\n\nNach vielen Jahren des Praktizierens von Vinyasa, Hatha und Rocket Yoga habe ich zwei Yoga-Ausbildungen in Hatha, Vinyasa und Kundalini (200 Stunden) sowie Kaula Tantra Yoga (300 Stunden) in Kolumbien und Ecuador abgeschlossen. Neben meiner Leidenschaft für kraftvolle und spielerische Flows habe ich die Schönheit langsamer, bewusster Praxis entdeckt. Kaula Tantra Yoga ist wie Medizin für mich. Es ist die erste Yoga-Praxis, die mich wirklich entspannt und mich in einen Zustand zwischen Wachen und Schlafen versetzt hat.",
        it: "Dal 2020, lo yoga è diventato una base importante per me, aiutandomi a connettermi con me stessa, il mio ambiente e i miei simili e ad essere presente. Mentre lo yoga era principalmente un allenamento per me, oggi è una pratica spirituale che mi permette di sperimentare pace e relax nel nostro mondo frenetico, di ancorarmi profondamente nel mio corpo e di connettermi con la mia forza interiore.\n\nDopo molti anni di pratica di Vinyasa, Hatha e Rocket Yoga, ho completato due formazioni yoga in Hatha, Vinyasa e Kundalini (200 ore) così come Kaula Tantra Yoga (300 ore) in Colombia ed Ecuador. Oltre alla mia passione per flussi potenti e giocosi, ho scoperto la bellezza della pratica lenta e consapevole. Kaula Tantra Yoga è come una medicina per me. È la prima pratica yoga che mi ha veramente rilassato e mi ha messo in uno stato tra veglia e sonno.",
      },
      philosophy: {
        en: "For me, yoga practice is a playful way of learning from each other, true to the motto: there is a teacher in each and every one of us. I teach holistic classes that incorporate elements of pranayama, meditation, yoga philosophy, dance and music. In my classes, I invite you to look within, flow with your breath and see your body as the temple that it is.",
        de: "Für mich ist die Yoga-Praxis eine spielerische Art, voneinander zu lernen, ganz nach dem Motto: In jedem von uns steckt ein Lehrer. Ich unterrichte ganzheitliche Klassen, die Elemente von Pranayama, Meditation, Yoga-Philosophie, Tanz und Musik einbeziehen. In meinen Klassen lade ich dich ein, nach innen zu schauen, mit deinem Atem zu fließen und deinen Körper als den Tempel zu sehen, der er ist.",
        it: "Per me, la pratica yoga è un modo giocoso di imparare gli uni dagli altri, fedele al motto: c'è un insegnante in ognuno di noi. Insegno classi olistiche che incorporano elementi di pranayama, meditazione, filosofia yoga, danza e musica. Nelle mie classi, ti invito a guardare dentro, fluire con il tuo respiro e vedere il tuo corpo come il tempio che è.",
      },
    },
  },
  {
    id: "join-us-1",
    experience: "0",
    image: "/placeholder-user.jpg",
    gradient: "from-[#D4B95C] to-[#B69724]",
    aura: "yellow",
    expertise: [],
    email: "ginkgoyogaberlin@gmail.com",
    languages: [],
    translations: {
      name: {
        en: "Join Us",
        de: "Join Us",
        it: "Join Us",
      },
      specialty: {
        en: "Waiting for you to join our team :)",
        de: "Warten darauf, dass du unserem Team beitrittst :)",
        it: "Aspettiamo che ti unisca al nostro team :)",
      },
      bio: {
        en: "We're looking for passionate yoga teachers to join our community. If you're interested in teaching at Ginkgo Yoga, we'd love to hear from you!",
        de: "Wir suchen leidenschaftliche Yoga-Lehrer, die unserer Gemeinschaft beitreten möchten. Wenn du Interesse daran hast, bei Ginkgo Yoga zu unterrichten, würden wir gerne von dir hören!",
        it: "Stiamo cercando insegnanti di yoga appassionati per unirsi alla nostra comunità. Se sei interessato a insegnare da Ginkgo Yoga, ci piacerebbe sentirti!",
      },
      philosophy: {
        en: "Your unique voice and teaching style could be exactly what our community needs.",
        de: "Deine einzigartige Stimme und dein Unterrichtsstil könnten genau das sein, was unsere Gemeinschaft braucht.",
        it: "La tua voce unica e il tuo stile di insegnamento potrebbero essere esattamente ciò di cui la nostra comunità ha bisogno.",
      },
    },
  },
];
import {
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Heart,
  Leaf,
  Sparkles,
  Check,
  Gift,
  Crown,
  Gem,
  Theater,
  Coffee,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import dynamic from 'next/dynamic'

type Language = "en" | "de" | "it"

interface Translations {
  [key: string]: {
    en: string | string[];
    de: string | string[];
    it: string | string[];
  };
}

const translations: Translations = {
  // Navigation
  home: { en: "Home", de: "Startseite", it: "Home" },
  about: { en: "About", de: "Über uns", it: "Chi siamo" },
  schedule: { en: "Schedule", de: "Terminplan", it: "Programma" },
  pricing: { en: "Prices", de: "Preise", it: "Prezzi" },
  team: { en: "Team", de: "Team", it: "Team" },
  contact: { en: "Contact", de: "Kontakt", it: "Contatti" },

  // Hero Section
  heroTitle: {
    en: "Like the ginkgo tree — steady, spacious, alive.",
    de: "Wie der Ginkgo-Baum — beständig, geräumig, lebendig.",
    it: "Come l'albero di ginkgo — stabile, spazioso, vivo.",
  },
  heroSubtitle: {
    en: "We offer yoga and mindfulness rooted in kindness and awareness. Ginkgo Yoga is a space to grow quietly, in your own way — supported by breath, movement, and community.",
    de: "Wir bieten Yoga und Achtsamkeit, verwurzelt in Güte und Bewusstsein. Ginkgo Yoga ist ein Raum, um ruhig zu wachsen, auf deine eigene Art — unterstützt von Atem, Bewegung und Gemeinschaft.",
    it: "Offriamo yoga e mindfulness radicati nella gentilezza e nella consapevolezza. Ginkgo Yoga è più di uno studio — è uno spazio tranquillo e creativo per la presenza, la bellezza e la comunità.",
  },
  heroWordOfMouth: {
    en: "Ginkgo Yoga grows quietly, off social media - thank you for finding us through word of mouth.",
    de: "Ginkgo Yoga wächst ruhig, abseits der sozialen Medien - danke, dass Sie uns durch Mundpropaganda gefunden haben.",
    it: "Ginkgo Yoga cresce silenziosamente, lontano dai social media - grazie per averci trovato attraverso il passaparola.",
  },
  startJourney: {
    en: "Schedule",
    de: "Terminplan",
    it: "Programma",
  },

  // About Section
  aboutTitle: {
    en: "About Ginkgo Yoga",
    de: "Über Ginkgo Yoga",
    it: "Su Ginkgo Yoga",
  },
  aboutText: {
    en: "Ginkgo Yoga is more than a studio — it's a quiet, creative space for presence, beauty, and community. You're warmly invited to stay after class for tea, conversation, or simply to sit. We believe in community as practice — where ideas, stories, and stillness can be shared equally. Our space is also open to rent for artistic and movement-based projects — from theatre, dance, and art to circus and other creative forms that bring people together through beauty and expression. We value fairness, kindness, and authenticity — and every teacher at Ginkgo is encouraged to teach in a way that resonates with their own truth and voice.",
    de: "Ginkgo Yoga ist mehr als ein Studio — es ist ein ruhiger, kreativer Raum für Präsenz, Schönheit und Gemeinschaft. Du bist herzlich eingeladen, nach dem Kurs für Tee, Gespräche oder einfach zum Sitzen zu bleiben. Wir glauben an Gemeinschaft als Praxis — wo Ideen, Geschichten und Stille gleichermaßen geteilt werden können. Unser Raum steht auch zur Miete für künstlerische und bewegungsbasierte Projekte zur Verfügung — von Theater, Tanz und Kunst bis hin zu Zirkus und anderen kreativen Formen, die Menschen durch Schönheit und Ausdruck zusammenbringen. Wir schätzen Fairness, Freundlichkeit und Authentizität — und jeder Lehrer bei Ginkgo wird ermutigt, auf eine Weise zu unterrichten, die mit seiner eigenen Wahrheit und Stimme in Resonanz steht.",
    it: "Ginkgo Yoga è più di uno studio — è uno spazio tranquillo e creativo per la presenza, la bellezza e la comunità. Sei calorosamente invitato a rimanere dopo la lezione per il tè, la conversazione o semplicemente per sederti. Crediamo nella comunità come pratica — dove idee, storie e quiete possono essere condivise equamente. Il nostro spazio è anche disponibile per l'affitto per progetti artistici e basati sul movimento — dal teatro, danza e arte al circo e altre forme creative che uniscono le persone attraverso la bellezza e l'espressione. Apprezziamo l'equità, la gentilezza e l'autenticità — e ogni insegnante di Ginkgo è incoraggiato a insegnare in un modo che risuoni con la propria verità e voce.",
  },

  // Pricing Section
  pricingTitle: {
    en: "Prices",
    de: "Preise",
    it: "Prezzi",
  },
  pricingSubtitle: {
    en: "Choose the membership option that works best for you",
    de: "Wählen Sie die Mitgliedschaftsoption, die am besten zu Ihnen passt",
    it: "Scegli l'opzione di membership che funziona meglio per te",
  },
  selectPlan: {
    en: "Begin Journey",
    de: "Reise beginnen",
    it: "Inizia Viaggio",
  },
  perMonth: {
    en: "per month",
    de: "pro Monat",
    it: "al mese",
  },
  mostPopular: {
    en: "Most Popular",
    de: "Beliebteste",
    it: "Più Popolare",
  },
  monthly: {
    en: "Monthly",
    de: "Monatlich",
    it: "Mensile",
  },
  yearly: {
    en: "Yearly",
    de: "Jährlich",
    it: "Annuale",
  },
  passes: {
    en: "Passes",
    de: "Karten",
    it: "Abbonamenti",
  },
  save: {
    en: "Save",
    de: "Sparen",
    it: "Risparmia",
  },
  discount: {
    en: "discount",
    de: "Rabatt",
    it: "sconto",
  },
  perYear: {
    en: "per year",
    de: "pro Jahr",
    it: "all'anno",
  },
  monthlyTotal: {
    en: "Monthly total",
    de: "Monatlich gesamt",
    it: "Totale mensile",
  },
  yearlyTotal: {
    en: "Yearly total",
    de: "Jährlich gesamt",
    it: "Totale annuo",
  },
  youSave: {
    en: "You save",
    de: "Sie sparen",
    it: "Risparmi",
  },
  studentDiscountNote: {
    en: "* 20% student discount available",
    de: "* 20% Studentenrabatt verfügbar",
    it: "* Sconto studente del 20% disponibile",
  },

  // Contact Section
  contactTitle: {
    en: "Contact Us",
    de: "Kontaktiere uns",
    it: "Contattaci",
  },
  address: {
    en: "Liebenwalder Str. 11, 13347 Berlin | Located in the quiet backyard (Hinterhof), entrance D.",
    de: "Liebenwalder Str. 11, 13347 Berlin | Aufgang \"D\" (Hinterhof)",
    it: "Liebenwalder Str. 11, 13347 Berlin | Situato nel tranquillo cortile (Hinterhof), ingresso D.",
  },
  studioName: {
    en: "Ginkgo Yoga",
    de: "Ginkgo Yoga",
    it: "Ginkgo Yoga",
  },
  // Add new translations for contact form
  sendMessage: {
    en: "Send Message",
    de: "Nachricht senden",
    it: "Invia messaggio",
  },
  name: {
    en: "Name",
    de: "Name",
    it: "Nome",
  },
  email: {
    en: "Email",
    de: "E-Mail",
    it: "Email",
  },
  message: {
    en: "Message",
    de: "Nachricht",
    it: "Messaggio",
  },

  // Stats
  students: { en: "Awakened Souls", de: "Erwachte Seelen", it: "Anime Risvegliate" },
  classes_count: { en: "Sacred Gatherings", de: "Heilige Versammlungen", it: "Raduni Sacri" },
  experience: { en: "Years of Wisdom", de: "Jahre der Weisheit", it: "Anni di Saggezza" },

  // Team member translations are now included directly in the teamMembers array

  // Pricing Plans
  yearUnlimited: {
    en: "1 Year Unlimited",
    de: "1 Jahr Unbegrenzt",
    it: "1 Anno Illimitato"
  },
  validMonths: {
    en: "Valid for 12 months",
    de: "Gültig für 12 Monate",
    it: "Valido per 12 mesi"
  },
  everyMonth: {
    en: "every month",
    de: "jeden Monat",
    it: "ogni mese"
  },
  unlimitedAccess: {
    en: "Unlimited access to all classes",
    de: "Unbegrenzter Zugang zu allen Kursen",
    it: "Accesso illimitato a tutte le lezioni"
  },
  monthsValidity: {
    en: "12 months validity",
    de: "12 Monate Gültigkeit",
    it: "Validità 12 mesi"
  },
  bestValue: {
    en: "Best value for regular practitioners",
    de: "Bester Wert für regelmäßige Praktizierende",
    it: "Miglior valore per i praticanti regolari"
  },
  tenClassPass: {
    en: "12 Class Pass",
    de: "12er Karte",
    it: "Abbonamento 12 Lezioni"
  },
  validSixMonths: {
    en: "Valid for 6 months",
    de: "Gültig für 6 Monate",
    it: "Valido per 6 mesi"
  },
  tenClasses: {
    en: "12 classes included",
    de: "12 Kurse inklusive",
    it: "12 lezioni incluse"
  },
  sixMonthsUse: {
    en: "6 months to use",
    de: "6 Monate nutzbar",
    it: "6 mesi per utilizzare"
  },
  perfectRegular: {
    en: "Perfect for regular practice",
    de: "Perfekt für regelmäßige Praxis",
    it: "Perfetto per la pratica regolare"
  },
  giftCard: {
    en: "5 - Gift Card",
    de: "5er Geschenkkarte",
    it: "5 - Carta Regalo"
  },
  validOneYear: {
    en: "Valid for one year",
    de: "Gültig für ein Jahr",
    it: "Valido per un anno"
  },
  perfectGift: {
    en: "Perfect gift option",
    de: "Perfekte Geschenkoption",
    it: "Opzione regalo perfetta"
  },
  yearValidity: {
    en: "1 year validity",
    de: "1 Jahr Gültigkeit",
    it: "Validità 1 anno"
  },
  transferable: {
    en: "Transferable to anyone",
    de: "Übertragbar auf jeden",
    it: "Trasferibile a chiunque"
  },
  insurance: {
    en: "Subsidised health insurance course",
    de: "Subventionierter Krankenkassenkurs",
    it: "Corso assicurazione sanitaria sovvenzionato"
  },
  validTwoMonths: {
    en: "Valid for ca. 3 months",
    de: "Gültig für ca. 3 Monate",
    it: "Valido per ca. 3 mesi"
  },
  insuranceEligible: {
    en: "140€ x 10 classes",
    de: "140€ x 10 Kurse",
    it: "140€ x 10 lezioni"
  },
  twoMonthsValidity: {
    en: "120€ x 8 classes",
    de: "120€ x 8 Kurse",
    it: "120€ x 8 lezioni"
  },
  insuranceSupport: {
    en: "Valid for ca. 3 months",
    de: "Gültig für ca. 3 Monate",
    it: "Valido per ca. 3 mesi"
  },
  goldenMembership: {
    en: "Golden Membership",
    de: "Gold Mitgliedschaft",
    it: "Abbonamento Gold"
  },
  validOneMonth: {
    en: "Valid for one month",
    de: "Gültig für einen Monat",
    it: "Valido per un mese"
  },
  premiumAccess: {
    en: "Unlimited classes a month",
    de: "Unbegrenzte Kurse pro Monat",
    it: "Lezioni illimitate al mese"
  },
  allClassesIncluded: {
    en: "All classes included",
    de: "Alle Kurse inbegriffen",
    it: "Tutte le lezioni incluse"
  },
  priorityBooking: {
    en: "2 months discount with completed year",
    de: "2 Monate Rabatt bei abgeschlossenem Jahr",
    it: "2 mesi di sconto con anno completato"
  },
  silverMembership: {
    en: "Silver Membership",
    de: "Silber Mitgliedschaft",
    it: "Abbonamento Silver"
  },
  basicAccess: {
    en: "One class a week",
    de: "Ein Kurs pro Woche",
    it: "Una lezione a settimana"
  },
  standardClasses: {
    en: "Valid for a month",
    de: "Gültig für einen Monat",
    it: "Valido per un mese"
  },
  communitySupport: {
    en: "Community support",
    de: "Community Unterstützung",
    it: "Supporto della community"
  },

  // Drop-in pricing plan
  dropIn: {
    en: "Drop-in",
    de: "Einzelstunde",
    it: "Lezione singola"
  },
  singleClass: {
    en: "Single class",
    de: "Einzelstunde",
    it: "Lezione singola"
  },
  tryOutClass: {
    en: "Try out class €12",
    de: "Probestunde €12",
    it: "Lezione di prova €12"
  },
  giftClass: {
    en: "Gift a class €15",
    de: "Stunde verschenken €15",
    it: "Regala una lezione €15"
  },
  noCommitment: {
    en: "No commitment needed",
    de: "Keine Verpflichtung",
    it: "Nessun impegno richiesto"
  },

  // Student deals pricing plan
  studentDeals: {
    en: "Student deals",
    de: "Studententarife",
    it: "Offerte studenti"
  },
  startingFrom: {
    en: "starting from",
    de: "ab",
    it: "a partire da"
  },
  studentWeekly1: {
    en: "€45/month - 1x week",
    de: "€45/Monat - 1x pro Woche",
    it: "€45/mese - 1x a settimana"
  },
  studentWeekly2: {
    en: "€65/month - 2x per week",
    de: "€65/Monat - 2x pro Woche",
    it: "€65/mese - 2x a settimana"
  },
  studentWeekly3: {
    en: "€75/month - 3x per week",
    de: "€75/Monat - 3x pro Woche",
    it: "€75/mese - 3x a settimana"
  },

  // Instructor Section
  aboutInstructor: {
    en: "About",
    de: "Über",
    it: "Chi sono"
  },
  teachingPhilosophy: {
    en: "Teaching Philosophy",
    de: "Lehransatz",
    it: "Filosofia di Insegnamento"
  },
  certifications: {
    en: "Expertise",
    de: "Expertise",
    it: "Competenze"
  },
  languages: {
    en: "Languages",
    de: "Sprachen",
    it: "Lingue"
  },

  // Common instructor translations  
  teachingExperience: {
    en: "years of teaching experience",
    de: "Jahre Lehrerfahrung",
    it: "anni di esperienza di insegnamento"
  },

  // Venue Rental Section
  venueRental: {
    en: "Venue Rental",
    de: "Raumvermietung",
    it: "Affitto Spazio",
  },
  venueRentalTitle: {
    en: "Rent Our Sacred Space",
    de: "Mieten Sie unseren heiligen Raum",
    it: "Affitta il nostro spazio sacro",
  },
  venueRentalDescription: {
    en: "Our tranquil studio is available for artistic and movement-based projects. From theater and dance to art exhibitions and creative gatherings, we welcome initiatives that bring people together through beauty and expression.",
    de: "Unser ruhiges Studio steht für künstlerische und bewegungsbasierte Projekte zur Verfügung. Von Theater und Tanz bis hin zu Kunstausstellungen und kreativen Zusammenkünften begrüßen wir Initiativen, die Menschen durch Schönheit und Ausdruck zusammenbringen.",
    it: "Il nostro tranquillo studio è disponibile per progetti artistici e basati sul movimento. Dal teatro e danza alle mostre d'arte e incontri creativi, accogliamo iniziative che uniscono le persone attraverso la bellezza e l'espressione.",
  },
  venueFeatures: {
    en: "Studio Features",
    de: "Studio-Ausstattung",
    it: "Caratteristiche dello Studio",
  },
  venueFeaturesItems: {
    en: [
      "Main room ~80 m²",
      "Bright natural light (can be darkened with rollos)",
      "Wooden floor",
      "Access to small garden area",
      "Small kitchen",
      "Bathroom included",
      "Calm and versatile space for workshops, classes, or events",
    ],
    de: [
      "Hauptraum ~80 m²",
      "Helles natürliches Licht (kann mit Rollos verdunkelt werden)",
      "Holzboden",
      "Zugang zu kleinem Gartenbereich",
      "Kleine Küche",
      "Badezimmer inklusive",
      "Ruhiger und vielseitiger Raum für Workshops, Kurse oder Veranstaltungen",
    ],
    it: [
      "Sala principale ~80 m²",
      "Luce naturale brillante (può essere oscurata con tende)",
      "Pavimento in legno",
      "Accesso a piccola area giardino",
      "Piccola cucina",
      "Bagno incluso",
      "Spazio calmo e versatile per workshop, lezioni o eventi",
    ],
  },
  venueContact: {
    en: "Contact us for availability and rates",
    de: "Kontaktieren Sie uns für Verfügbarkeit und Preise",
    it: "Contattaci per disponibilità e tariffe",
  },
  venueInquiry: {
    en: "Rental Inquiry",
    de: "Mietanfrage",
    it: "Richiesta di Affitto",
  },
}

const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
}>({
  language: "en",
  setLanguage: () => { },
  t: () => "",
  tArray: () => [],
})

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = useCallback(
    (key: string): string => {
      const translation = translations[key]
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`)
        return key
      }
      const value = translation[language]
      return Array.isArray(value) ? value[0] : value
    },
    [language]
  )

  const tArray = useCallback(
    (key: string): string[] => {
      const translation = translations[key]
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`)
        return []
      }
      const value = translation[language]
      return Array.isArray(value) ? value : [value]
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Intersection Observer hook for animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [ref, isIntersecting] as const
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="aurora-bg">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
        <div className="aurora aurora-4"></div>
      </div>
    </div>
  )
}

// Dynamically import FloatingOrbs with no SSR
const FloatingOrbs = dynamic(() => Promise.resolve(() => {
  const orbs = Array.from({ length: 12 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 20 + Math.random() * 15
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute animate-float-elegant opacity-20"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        >
          <div className="relative">
            <div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B69724]/40 via-[#D4B95C]/40 to-[#B69724]/40 blur-sm"
              style={{
                boxShadow:
                  "0 0 20px rgba(182, 151, 36, 0.3), 0 0 40px rgba(212, 185, 92, 0.2), 0 0 60px rgba(182, 151, 36, 0.1)",
              }}
            />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/10 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}), { ssr: false })

function MorphingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 w-96 h-96 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-[#B69724]/20 via-[#D4B95C]/20 to-[#B69724]/20 rounded-full animate-morph-1 blur-3xl" />
      </div>
      <div className="absolute top-40 right-32 w-80 h-80 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-[#D4B95C]/40 via-[#B69724]/40 to-[#D4B95C]/40 rounded-full animate-morph-2 blur-3xl" />
      </div>
      <div className="absolute bottom-32 left-40 w-72 h-72 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-[#B69724]/40 via-[#D4B95C]/40 to-[#B69724]/40 rounded-full animate-morph-3 blur-3xl" />
      </div>
    </div>
  )
}

function GinkgoLeafPattern() {
  return (
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `url('/images/ginkgo-pattern.jpg')`,
        backgroundSize: "400px 400px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    />
  )
}

function Header({ onScheduleClick }: { onScheduleClick: () => void }) {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === "schedule") {
      onScheduleClick()
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/50" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src="/images/ginkgo-logo.jpg"
                  alt="Ginkgo Yoga Logo"
                  className="w-full h-full object-cover"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                />
              </div>
              <span className="text-xl font-light tracking-wide" style={{ color: "#B69724" }}>
                Ginkgo
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-stone-600 hover:text-[#B69724] transition-colors font-light">
              {t("home")}
            </button>
            <button onClick={() => scrollToSection("about")} className="text-stone-600 hover:text-[#B69724] transition-colors font-light">
              {t("about")}
            </button>
            <button onClick={() => scrollToSection("schedule")} className="text-stone-600 hover:text-[#B69724] transition-colors font-light">
              {t("schedule")}
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-stone-600 hover:text-[#B69724] transition-colors font-light">
              {t("pricing")}
            </button>
            <button onClick={() => scrollToSection("team")} className="text-stone-600 hover:text-[#B69724] transition-colors font-light">
              {t("team")}
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-stone-600 hover:text-[#B69724] transition-colors font-light">
              {t("contact")}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-6 w-6 text-stone-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => scrollToSection("home")}>
                    {t("home")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("about")}>
                    {t("about")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("schedule")}>
                    {t("schedule")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("pricing")}>
                    {t("pricing")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("team")}>
                    {t("team")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("contact")}>
                    {t("contact")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5 text-stone-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("de")}>
                  Deutsch {language === "de" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("it")}>
                  Italiano {language === "it" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  )
}

function HeroSection({ onScheduleClick }: { onScheduleClick: () => void }) {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    if (id === "schedule") {
      onScheduleClick()
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-yellow-50/20" />
      <GinkgoLeafPattern />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-12 shadow-lg shadow-yellow-800/10">
            <img
              src="/images/ginkgo-logo.jpg"
              alt="Ginkgo Yoga Logo"
              className="w-full h-full object-cover object-center"
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
          </div>
        </div>

        <h1
          className="text-4xl md:text-6xl font-light mb-12 leading-relaxed tracking-wide"
          style={{ color: "#B69724" }}
        >
          {t("heroTitle")}
        </h1>

        <p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          style={{ color: "#8B7355" }}
        >
          {t("heroSubtitle")}
        </p>

        <p
          className="text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed font-light italic"
          style={{ color: "#A0845C" }}
        >
          {t("heroWordOfMouth")}
        </p>

        <Button
          size="lg"
          className="text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-light"
          style={{
            backgroundColor: "#B69724",
            "--tw-shadow-color": "#B69724",
          } as React.CSSProperties}
          onClick={() => scrollToSection("schedule")}
        >
          {t("startJourney")}
        </Button>
      </div>
    </section>
  )
}

function AboutSection() {
  const { t } = useLanguage()
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="about" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-yellow-50/20" />
      <GinkgoLeafPattern />
      <MorphingShapes />

      <div ref={ref} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-6xl font-light mb-12 leading-relaxed tracking-wide transition-all duration-1500"
          style={{ color: "#B69724" }}
        >
          {t("aboutTitle")}
        </h2>

        <p
          className="text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1500 delay-500"
          style={{ color: "#8B7355" }}
        >
          {t("aboutText")}
        </p>
      </div>
    </section>
  )
}

function ScheduleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage()

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-1 sm:p-2"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-stone-50/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl w-full h-full sm:h-auto sm:max-w-[98vw] sm:max-h-[98vh] overflow-hidden border border-yellow-800/20 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 flex-shrink-0 border-b border-stone-200/50">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide" style={{ color: "#B69724" }}>
            {t("schedule")}
          </h2>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-stone-700 transition-colors p-2 rounded-full hover:bg-stone-200/50 flex-shrink-0"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Calendar */}
        <div className="flex-1 w-full bg-white/80 backdrop-blur-xl overflow-auto border border-stone-200/50">
          <div className="w-full h-full min-h-[600px] sm:min-h-[700px] flex items-center justify-start p-1">
            <div className="w-full h-full min-w-[900px] max-w-[900px] mx-auto">
              <iframe
                title="embedded-calendar"
                src="https://admin.gymly.io/embed/calendar/36196fbb-fb36-48de-891d-36c88f4b1ce8?responsive=true"
                className="w-full h-full min-h-[600px] sm:min-h-[700px]"
                style={{ 
                  border: 0,
                  minWidth: '900px'
                }}
                allow="fullscreen"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingSection() {
  const { t } = useLanguage()
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly" | "passes">("passes")

  // Monthly subscription plans only
  const monthlyPlans = [
    {
      name: t("goldenMembership"),
      price: "€95.00",
      duration: t("validOneMonth"),
      icon: Crown,
      gradient: "from-[#D4B95C] to-[#B69724]",
      features: [t("premiumAccess"), t("allClassesIncluded"), t("bestValue")],
      popular: false,
      studentDiscount: true, // 20% student discount available
    },
    {
      name: t("silverMembership"),
      price: "€56.00",
      duration: t("validOneMonth"),
      icon: Gem,
      gradient: "from-[#B69724] to-[#D4B95C]",
      features: [t("basicAccess"), t("standardClasses"), t("communitySupport")],
      popular: false,
      studentDiscount: true, // 20% student discount available
    },
  ]

  // Yearly subscription plans only
  const yearlyPlans = [
    {
      name: t("yearUnlimited"),
      price: "€88.00",
      duration: t("validMonths"),
      priceNote: t("everyMonth"),
      icon: Sparkles,
      gradient: "from-[#B69724] to-[#D4B95C]",
      features: [t("unlimitedAccess"), t("monthsValidity")],
      popular: true,
      discount: 30, // 30% discount compared to Golden Membership (€95/month)
      monthlyEquivalentTotal: "€1,140.00", // €95 × 12 months
      yearlyTotal: "€798.00", // New yearly price
      savings: "€342.00", // €1,140 - €798
    },
  ]

  // One-time passes and special options
  const passPlans = [
    {
      name: t("dropIn"),
      price: "€15.00",
      duration: t("singleClass"),
      icon: Coffee,
      gradient: "from-[#D4B95C] to-[#B69724]",
      features: [t("tryOutClass"), t("giftClass"), t("noCommitment")],
      popular: false,
    },
    {
      name: t("tenClassPass"),
      price: "€150.00",
      duration: t("validSixMonths"),
      icon: Heart,
      gradient: "from-[#D4B95C] to-[#B69724]",
      features: [t("tenClasses"), t("sixMonthsUse"), t("perfectRegular")],
      popular: false,
      discount: null, // No direct monthly equivalent
      studentDiscount: true, // 20% student discount available
    },
    {
      name: t("insurance"),
      price: "",
      duration: "",
      icon: Leaf,
      gradient: "from-[#B69724] to-[#D4B95C]",
      features: [t("insuranceEligible"), t("twoMonthsValidity"), t("insuranceSupport")],
      popular: false,
      discount: null, // Insurance plan, no discount calculation
    },
  ]

  const currentPlans = activeTab === "monthly" ? monthlyPlans : activeTab === "yearly" ? yearlyPlans : passPlans
  
  // Calculate best discount for yearly plans
  const bestYearlyDiscount = yearlyPlans
    .map(plan => plan.discount)
    .filter((discount): discount is number => discount !== null)
    .reduce((max, discount) => Math.max(max, discount), 0)

  return (
    <section id="pricing" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-stone-50 to-orange-50/30" />
      <GinkgoLeafPattern />
      <MorphingShapes />

      <div ref={ref} className="relative z-10 w-full px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-light mb-12 leading-relaxed tracking-wide transition-all duration-1500`}
            style={{ color: "#B69724" }}
          >
            {t("pricingTitle")}
          </h2>
          <p
            className={`text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1500 delay-300`}
            style={{ color: "#8B7355" }}
          >
            {t("pricingSubtitle")}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "monthly" | "yearly" | "passes")} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-3 bg-stone-100/80 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger
                value="passes"
                className="data-[state=active]:bg-white data-[state=active]:text-[#B69724] data-[state=active]:shadow-sm font-light transition-all duration-300"
                style={{
                  color: activeTab === "passes" ? "#B69724" : "#8B7355",
                }}
              >
                {t("passes")}
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-white data-[state=active]:text-[#B69724] data-[state=active]:shadow-sm font-light transition-all duration-300"
                style={{
                  color: activeTab === "monthly" ? "#B69724" : "#8B7355",
                }}
              >
                {t("monthly")}
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="data-[state=active]:bg-white data-[state=active]:text-[#B69724] data-[state=active]:shadow-sm font-light transition-all duration-300 relative flex items-center gap-2 justify-center"
                style={{
                  color: activeTab === "yearly" ? "#B69724" : "#8B7355",
                }}
              >
                <span>{t("yearly")}</span>
                {bestYearlyDiscount > 0 && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#B69724] to-[#D4B95C] text-white shadow-sm whitespace-nowrap">
                    {t("save")} {bestYearlyDiscount}%
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-xl transition-all duration-1000 bg-stone-50/90 backdrop-blur-xl rounded-2xl h-full ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
                }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                boxShadow: "0 25px 50px -12px rgba(184, 134, 11, 0.15)",
              }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-700 shadow-lg shadow-yellow-800/20">
                      <img
                        src="/images/ginkgo-logo.jpg"
                        alt="Ginkgo Yoga Logo"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        style={{ clipPath: "circle(50% at 50% 50%)" }}
                      />
                    </div>
                  </div>

                  <div className="relative mb-3">
                    <h3
                      className="text-xl font-light text-stone-700 mb-2 group-hover:transition-colors duration-500 tracking-wide"
                      style={{ "--hover-color": "#B8860B" } as React.CSSProperties}
                    >
                      {plan.name}
                    </h3>
                    {activeTab === "yearly" && "discount" in plan && (plan as any).discount !== null && (plan as any).discount > 0 && (
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-[#B69724] to-[#D4B95C] text-white text-xs font-medium shadow-md mt-2">
                        <span>{t("save")}</span>
                        <span className="ml-1 font-semibold">{(plan as any).discount}%</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    {activeTab === "yearly" && "monthlyEquivalentTotal" in plan && (plan as any).monthlyEquivalentTotal && (
                      <div className="mb-3">
                        <div className="text-stone-500 font-light text-sm mb-1">{t("monthlyTotal")}</div>
                        <div
                          className="text-xl font-light line-through text-stone-400 mb-2"
                        >
                          {(plan as any).monthlyEquivalentTotal}
                        </div>
                        <div className="text-stone-500 font-light text-sm mb-1">{t("yearlyTotal")}</div>
                        <div
                          className="text-3xl font-extralight bg-gradient-to-r bg-clip-text text-transparent mb-1"
                          style={{
                            backgroundImage: "linear-gradient(to right, #B69724, #D4B95C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {(plan as any).yearlyTotal}
                        </div>
                        {"savings" in plan && (plan as any).savings && (
                          <div className="mt-2 text-sm font-medium" style={{ color: "#B69724" }}>
                            {t("youSave")} {(plan as any).savings}
                          </div>
                        )}
                      </div>
                    )}
                    {!(activeTab === "yearly" && "monthlyEquivalentTotal" in plan && (plan as any).monthlyEquivalentTotal) && (
                      <>
                        <div
                          className="text-3xl font-extralight bg-gradient-to-r bg-clip-text text-transparent mb-1"
                          style={{
                            backgroundImage: "linear-gradient(to right, #B69724, #D4B95C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {plan.price}
                        </div>
                        {"priceNote" in plan && plan.priceNote && <div className="text-stone-600 font-light text-sm">{plan.priceNote}</div>}
                      </>
                    )}
                    <div className="text-stone-600 font-light text-xs mt-1">{plan.duration}</div>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2 text-left">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "linear-gradient(to bottom right, #B69724, #D4B95C)" }}
                        >
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                        <span className="text-stone-600 font-light text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Student Discount Note - Individual Card */}
                  {"studentDiscount" in plan && (plan as any).studentDiscount && (
                    <div className="mt-auto pt-4 border-t border-stone-200">
                      <p className="text-stone-600 font-light text-xs text-center">
                        {t("studentDiscountNote")}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function InstructorsSection() {
  const { t, language } = useLanguage()
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })
  const [selectedInstructor, setSelectedInstructor] = useState<TeamMember | null>(null)
  const [isJoinUsDialogOpen, setIsJoinUsDialogOpen] = useState(false)
  const isClient = useIsClient()

  const handleInstructorClick = (instructor: TeamMember) => {
    if (instructor.id.startsWith('join-us')) {
      setIsJoinUsDialogOpen(true)
    } else {
      setSelectedInstructor(instructor)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <section id="team" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-stone-50" />
      <GinkgoLeafPattern />
      <MorphingShapes />

      <div ref={ref} className="relative z-10 w-full px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-light mb-12 leading-relaxed tracking-wide transition-all duration-1500"
            style={{ color: "#B69724" }}
          >
            {t("team")}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-y-16 max-w-7xl mx-auto">
          {teamMembers.map((instructor, index) => (
            <div
              key={instructor.id}
              className={`flex flex-col items-center justify-start group transition-all duration-1000 cursor-pointer h-full mx-24 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
                }`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onClick={() => handleInstructorClick(instructor)}
            >
              <div className="w-64 h-64 mb-10 relative">
                <div className="w-full h-full overflow-hidden rounded-full border-4 border-amber-100/50 bg-transparent">
                  <div className="w-full h-full relative">
                    <img
                      src={instructor.image || "/placeholder-user.jpg"}
                      alt={instructor.translations.name[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${instructor.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center flex-grow">
                <h3
                  className="text-4xl font-light text-stone-700 mb-4 group-hover:transition-colors duration-500 tracking-wide"
                  style={{ "--hover-color": "#B8860B" } as React.CSSProperties}
                >
                  {instructor.translations.name[language]}
                </h3>
                <p className="mb-8 font-light text-lg tracking-wide" style={{ color: "#B69724" }}>
                  {instructor.translations.specialty[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedInstructor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-stone-50/95 backdrop-blur-xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-yellow-800/20 shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={selectedInstructor.image || "/placeholder.svg"}
                      alt={selectedInstructor.translations.name[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-stone-700 tracking-wide">{selectedInstructor.translations.name[language]}</h3>
                    <p className="text-lg font-light" style={{ color: "#B69724" }}>
                      {selectedInstructor.translations.specialty[language]}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInstructor(null)}
                  className="text-stone-500 hover:text-stone-700 transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <h4 className="text-lg font-light text-stone-700 mb-2">{t("aboutInstructor")}</h4>
                  <div className="text-stone-600 leading-relaxed font-light space-y-4">
                    {selectedInstructor.translations.bio[language].split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Philosophy */}
                <div>
                  <h4 className="text-lg font-light text-stone-700 mb-2">{t("teachingPhilosophy")}</h4>
                  <p className="text-stone-600 leading-relaxed font-light italic">"{selectedInstructor.translations.philosophy[language]}"</p>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-lg font-light text-stone-700 mb-2">{t("certifications")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInstructor.expertise.map((cert: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-100/50 text-stone-600 rounded-full text-sm font-light border border-yellow-200/50"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-lg font-light text-stone-700 mb-2">{t("languages")}</h4>
                  <p className="text-stone-600 font-light">{selectedInstructor.languages.join(", ")}</p>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-lg font-light text-stone-700 mb-2">Contact</h4>
                  <a
                    href={`mailto:${selectedInstructor.email}`}
                    className="text-stone-600 hover:text-yellow-800 transition-colors font-light"
                  >
                    {selectedInstructor.email}
                  </a>
                </div>

                {/* Experience */}
                <div className="pt-4 border-t border-stone-200">
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-5 w-5" style={{ color: "#B69724" }} />
                    <span className="text-stone-600 font-light">
                      {selectedInstructor.experience} {t("teachingExperience")}
                    </span>
                    <Sparkles className="h-5 w-5" style={{ color: "#B69724" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Us Dialog */}
      {isJoinUsDialogOpen && (
        <JoinUsDialog 
          isOpen={isJoinUsDialogOpen} 
          onClose={() => setIsJoinUsDialogOpen(false)} 
        />
      )}
    </section>
  )
}

function JoinUsDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    experience: '',
    specialties: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:ginkgoyogaberlin@gmail.com?subject=Yoga Teacher Application from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AExperience: ${formData.experience}%0D%0ASpecialties: ${formData.specialties}%0D%0A%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-stone-50/95 backdrop-blur-xl rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-yellow-800/20 shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-light tracking-wide" style={{ color: "#B69724" }}>
                Join Our Yoga Teaching Team
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed font-light">
                We're always looking for passionate and dedicated yoga teachers to join our community. Share your experience and let us know how you'd like to contribute to Ginkgo Yoga.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-stone-500 hover:text-stone-700 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-light mb-4" style={{ color: "#B69724" }}>
              Tell Us About Yourself
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Years of Teaching Experience"
                  className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                  required
                />
                <input
                  type="text"
                  name="specialties"
                  value={formData.specialties}
                  onChange={handleInputChange}
                  placeholder="Your Yoga Specialties"
                  className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your teaching philosophy and why you'd like to join Ginkgo Yoga..."
                rows={4}
                className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent resize-none transition-all duration-300 font-light"
                required
              />
              <Button
                type="submit"
                className="w-full text-white py-3 rounded-xl font-light text-lg shadow-xl transition-all duration-500 tracking-wide"
                style={{
                  background: "linear-gradient(to right, #B69724, #D4B95C, #B69724)",
                  boxShadow: "0 20px 40px -12px rgba(182, 151, 36, 0.3)",
                }}
              >
                Send Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  const { t } = useLanguage()
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:ginkgoyogaberlin@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <AuroraBackground />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(182, 151, 36, 0.8), rgba(212, 185, 92, 0.75), rgba(182, 151, 36, 0.8))",
        }}
      />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2
            className={`text-4xl md:text-6xl font-light mb-8 text-white transition-all duration-1500 tracking-wider leading-tight pb-4 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
              }`}
            style={{ lineHeight: "1.2" }}
          >
            {t("contactTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-10">
            {[
              {
                icon: MapPin,
                title: t("studioName"),
                content: t("address"),
                link: "https://maps.app.goo.gl/bnawkqrGpbJAu78Y8",
                isLink: true
              },
              {
                icon: Mail,
                title: "Email",
                content: "ginkgoyogaberlin@gmail.com",
                isLink: false
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 group transition-all duration-1000 ${isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"
                  }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{item.title}</h3>
                  {item.isLink ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-100 text-lg font-light leading-relaxed break-words hover:text-amber-200 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <div className="text-amber-100 text-lg font-light leading-relaxed break-words">
                      {item.content.split('|').map((line: string, index: number) => (
                        <div key={index} className={index > 0 ? "mt-2" : ""}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 transition-all duration-1500 ${isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
              }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-3xl font-light text-white mb-8 tracking-wide leading-tight">
              {t("contactTitle")}
            </h3>
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("name")}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-xl transition-all duration-500 font-light text-lg"
                style={{ "--tw-ring-color": "rgba(184, 134, 11, 0.5)" } as React.CSSProperties}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("email")}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-xl transition-all duration-500 font-light text-lg"
                style={{ "--tw-ring-color": "rgba(184, 134, 11, 0.5)" } as React.CSSProperties}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("message")}
                rows={5}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-xl resize-none transition-all duration-500 font-light text-lg"
                style={{ "--tw-ring-color": "rgba(184, 134, 11, 0.5)" } as React.CSSProperties}
                required
              />
              <Button
                type="submit"
                className="w-full text-white py-4 rounded-2xl font-light text-lg shadow-2xl transition-all duration-500 tracking-wide"
                style={{
                  background: "linear-gradient(to right, #B69724, #D4B95C, #B69724)",
                  boxShadow: "0 25px 50px -12px rgba(182, 151, 36, 0.3)",
                }}
              >
                {t("sendMessage")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#B69724]/20 via-[#D4B95C]/20 to-[#B69724]/20" />
      <FloatingOrbs />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-8 group">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center group-hover:rotate-12 transition-all duration-700 shadow-lg">
            <img
              src="/images/ginkgo-logo.jpg"
              alt="Ginkgo Yoga Logo"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
          </div>
          <span className="text-3xl font-light tracking-wider" style={{ color: "#B69724" }}>
            Ginkgo Yoga
          </span>
        </div>
        <p className="text-slate-400 text-sm font-light">
          © 2025 Ginkgo Yoga. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
  return isClient
}

function VenueRentalDialog() {
  const { t, tArray } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    duration: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:ginkgoyogaberlin@gmail.com?subject=Venue Rental Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0ADate: ${formData.date}%0D%0ADuration: ${formData.duration}%0D%0A%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-[#B69724] to-[#D4B95C] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
      >
        <Theater className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-light tracking-wide">{t("venueRental")}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-stone-50/95 backdrop-blur-xl rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-yellow-800/20 shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-light tracking-wide" style={{ color: "#B69724" }}>
                    {t("venueRentalTitle")}
                  </h2>
                  <p className="mt-4 text-stone-600 leading-relaxed font-light">
                    {t("venueRentalDescription")}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-stone-500 hover:text-stone-700 transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-light mb-4" style={{ color: "#B69724" }}>
                  {t("venueFeatures")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tArray("venueFeaturesItems").map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(to bottom right, #B69724, #D4B95C)" }}
                      >
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-stone-600 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-light mb-4" style={{ color: "#B69724" }}>
                  {t("venueContact")}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("name")}
                    className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("email")}
                    className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                      required
                    />
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="Duration (e.g., 2 hours, full day)"
                      className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent transition-all duration-300 font-light"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event"
                    rows={4}
                    className="w-full px-4 py-2 rounded-xl bg-white/50 border border-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B69724]/50 focus:border-transparent resize-none transition-all duration-300 font-light"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full text-white py-3 rounded-xl font-light text-lg shadow-xl transition-all duration-500 tracking-wide"
                    style={{
                      background: "linear-gradient(to right, #B69724, #D4B95C, #B69724)",
                      boxShadow: "0 20px 40px -12px rgba(182, 151, 36, 0.3)",
                    }}
                  >
                    {t("venueInquiry")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function YogaStudioPortfolio() {
  const isClient = useIsClient()
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

  if (!isClient) {
    return null
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen scroll-smooth">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600&family=Outfit:wght@200;300;400;500&display=swap');

          * {
            font-family: 'Plus Jakarta Sans', 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            scroll-behavior: smooth;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Outfit', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            scroll-behavior: smooth;
          }
          
          @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes levitate {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          @keyframes float-elegant {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
            50% { transform: translateY(-10px) translateX(-5px) rotate(-3deg); }
            75% { transform: translateY(-25px) translateX(-10px) rotate(7deg); }
          }
          
          @keyframes pulse-gentle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes morph-1 {
            0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
            25%     { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.1); }
            50%     { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; transform: rotate(180deg) scale(0.9); }
            75%     { border-radius: 60% 40% 60% 30% / 70% 30% 60% 40%; transform: rotate(270deg) scale(1.05); }
          }

          @keyframes morph-2 {
            0%,100% { border-radius: 40% 60% 60% 40% / 70% 50% 30% 60%; transform: rotate(0deg) scale(1); }
            33%     { border-radius: 70% 30% 50% 60% / 40% 70% 60% 30%; transform: rotate(120deg) scale(1.1); }
            66%     { border-radius: 30% 70% 40% 60% / 60% 40% 70% 50%; transform: rotate(240deg) scale(0.95); }
          }

          @keyframes morph-3 {
            0%,100% { border-radius: 50% 50% 80% 20% / 90% 25% 75% 10%; transform: rotate(0deg) scale(1); }
            50%     { border-radius: 20% 80% 50% 50% / 10% 75% 25% 90%; transform: rotate(180deg) scale(1.08); }
          }

          /* Aurora background helpers */
          .aurora-bg        { position:absolute; inset:0; overflow:hidden; }
          .aurora           { position:absolute; width:100%; height:100%; opacity:.25; filter:blur(45px); }
          .aurora-1         { background:linear-gradient(45deg,#B69724,#D4B95C,#E6D7A7); }
          .aurora-2         { background:linear-gradient(-45deg,#D4B95C,#E6D7A7,#B69724); }
          .aurora-3         { background:linear-gradient(90deg,#B69724,#D4B95C,#E6D7A7); }
          .aurora-4         { background:linear-gradient(-90deg,#E6D7A7,#D4B95C,#B69724); }

          @keyframes aurora-move-1 {
            0%,100% { transform:translateX(-100%) translateY(-50%) rotate(0deg); }
            50%     { transform:translateX( 100%) translateY( 50%) rotate(180deg); }
          }
          @keyframes aurora-move-2 {
            0%,100% { transform:translateX( 100%) translateY(100%) rotate(0deg); }
            50%     { transform:translateX(-100%) translateY(-100%) rotate(-180deg); }
          }
          @keyframes aurora-move-3 {
            0%,100% { transform:translateY(-100%) translateX( 50%) rotate(0deg); }
            50%     { transform:translateY( 100%) translateX(-50%) rotate(90deg); }
          }
          @keyframes aurora-move-4 {
            0%,100% { transform:translateY( 100%) translateX(-50%) rotate(0deg); }
            50%     { transform:translateY(-100%) translateX( 50%) rotate(-90deg); }
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar        { width:8px; }
          ::-webkit-scrollbar-track  { background:linear-gradient(to bottom,#fdf4e3,#fef7e7); }
          ::-webkit-scrollbar-thumb  { background:linear-gradient(to bottom,#B8860B,#DAA520); border-radius:4px; }
          ::-webkit-scrollbar-thumb:hover { background:linear-gradient(to bottom,#8b6508,#c08f36); }

          /* Responsive modal fixes for embedded calendar modals */
          @media (max-width: 640px) {
            /* Target any modals that might appear from iframes */
            body > div[role="dialog"],
            body > div[class*="modal"],
            body > div[class*="Modal"],
            body > div[class*="dialog"],
            body > div[class*="Dialog"] {
              max-width: 95vw !important;
              max-height: 95vh !important;
              margin: 2.5vh auto !important;
              padding: 1rem !important;
              overflow-y: auto !important;
            }
            
            /* Ensure modal content is scrollable on mobile */
            body > div[role="dialog"] > div,
            body > div[class*="modal"] > div,
            body > div[class*="Modal"] > div {
              max-height: calc(95vh - 2rem) !important;
              overflow-y: auto !important;
            }
          }
        `}</style>

        {/* --- site sections --- */}
        <Header onScheduleClick={() => setIsScheduleModalOpen(true)} />
        <main className="space-y-4">
          <HeroSection onScheduleClick={() => setIsScheduleModalOpen(true)} />
          <AboutSection />
          <PricingSection />
          <InstructorsSection />
          <ContactSection />
        </main>
        <Footer />
        <VenueRentalDialog />
        <ScheduleModal 
          isOpen={isScheduleModalOpen} 
          onClose={() => setIsScheduleModalOpen(false)} 
        />
      </div>
    </LanguageProvider>
  )
}

export default dynamic(() => Promise.resolve(YogaStudioPortfolio), {
  ssr: false
})
