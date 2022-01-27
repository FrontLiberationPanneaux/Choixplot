import imgQ1 from '../assets/imgQ1.jpg'
import imgQ2 from '../assets/imgQ2.jpg'
import imgQ3 from '../assets/imgQ3.jpg'
import imgQ4 from '../assets/imgQ4.jpg'
import imgQ5 from '../assets/imgQ5.jpg'
import imgQ6 from '../assets/imgQ6.jpg'
import imgQ7 from '../assets/imgQ7.jpg'
import imgQ8 from '../assets/imgQ8.jpg'
import imgQ9 from '../assets/imgQ9.jpg'
import imgQ10 from '../assets/imgQ10.jpg'
import imgQ11 from '../assets/imgQ11.jpg'
import imgQ12 from '../assets/imgQ12.jpg'
import imgQ13 from '../assets/imgQ13.jpg'
import imgQ14 from '../assets/imgQ2.jpg'
import imgQ15 from '../assets/imgQ1.jpg'

// score : [Cd, Pe, Se, Sn]
// Cd = [1,0,0,0]
// Pe = [0,1,0,0]
// Se = [0,0,1,0]
// Sn = [0,0,0,1]

export const Question = [
	{
        id: 1,
		enonce: 'A quel panneau vous indentifiez-vous le plus ?',
        reponses: [
            {   
                texte: 'A: Le panneau A, route prioritaire',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'B: Le panneau B, priorité ponctuelle',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'C: Le panneau C, rond point',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'D: Le panneau D, céder le passage',
                tabScore: [0,1,0,0]
            }
        ],
        img: imgQ1
	},

    {
        id: 2,
		enonce: 'Sur l\'autoroute vous choisissez :',
        reponses: [
            {   
                texte: 'A: La voie de droite : La voie la plus sûre, on peut rouler tranquillement',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'B: La voie du milieu : On peut rouler vite, on n\'est pas freinés par la voie de droite',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'C: La voie de gauche : On recherche la vitesse et l\'efficacité !',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'D :La bande d\'arrêt d\'urgence : On peut rouler vite, on n\'est pas génés par les bouchons',
                tabScore: [0,0,1,0]
            }
        ],
        img: imgQ2
	},

    {
        id: 3,
		enonce: 'Comment préférez-vous vous garer ?',
        reponses: [
            {   
                texte: 'A: En épi',
                tabScore: [0,1,1,0]
            },
            {   
                texte: 'B: En créneau',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'C: En bataille',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'D: En double-file',
                tabScore: [0,0,1,0]
            }
        ],
        img: imgQ3
	},

    {
        id: 4,
		enonce: 'Quelle serait votre réaction si vous receviez un PV pour excès de vitesse ?',
        reponses: [
            {   
                texte: 'A: Comment ! Je respecte toujours les limitations.',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'B: Impossible ! J’ai mémorisé l’emplacement de tous les radars du coin.',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'C: Je conteste et menace l’agent si possible.',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'D: Je le paye sans réfléchir.',
                tabScore: [0,1,0,0]
            }
        ],
        img: imgQ4
	},

    {
        id: 5,
		enonce: 'Quelle est votre pire défaut quand vous conduisez ?',
        reponses: [
            {   
                texte: 'A: Le manque d’anticipation',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'B: Confondre ma gauche et ma droite',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'C: Aucun, je suis un conducteur hors pair',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'D: Prendre trop de risque',
                tabScore: [0,0,1,0]
            }
        ],
        img: imgQ5
	},

    {
        id: 6,
		enonce: 'Sur la route, quels rapports avez-vous avec les autres usagers ?',
        reponses: [
            {   
                texte: 'A: Je les insulte s’il me klaxonne',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'B: Je les ignore, ils ne font que me distraire',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'C: Je les remercie quand ils me doublent',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'D: Je les respecte tous',
                tabScore: [1,0,0,0]
            }
        ],
        img: imgQ6
	},

    {
        id: 7,
		enonce: 'Quelqu’un a oublié sa ceinture, que faites-vous ?',
        reponses: [
            {   
                texte: 'A: Je ne fais rien, m’en fous je ne l’ai pas non plus',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'B: Je l’abandonne sur le bord de la route',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'C: Je pile pour qu’il se rende compte de son erreur',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'D: Je lui demande gentiment et n’insiste pas trop',
                tabScore: [0,1,0,0]
            }
        ],
        img: imgQ7
	},

    {
        id: 8,
		enonce: 'Comment payez-vous aux péages ?',
        reponses: [
            {   
                texte: 'A: Carte bancaire ou pièces ',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'B: Avec le télépéage',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'C: Je ne paye pas, je passe',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'D: Je ne prends pas les autoroutes payantes, j’optimise',
                tabScore: [0,0,0,1]
            }
        ],
        img: imgQ8
	},

    {
        id: 9,
		enonce: 'Quelle citation de Panneau vous inspire le plus ?',
        reponses: [
            {   
                texte: 'A: \"Comme la grêle dans la mer, les pleutres rabattent devant nous.\"',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'B: \"La vie c\'est comme un poteau, ça fait toujours mal quand on se le prend dans la tronche.\"',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'C: \"Les fardeaux les plus lourds à porter sont ceux qu\'on ne voit pas.\"',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'D: \"Le beurre salé, c\'est la vie ! \"',
                tabScore: [0,1,0,0]
            }
        ],
        img: imgQ9
	},

    {
        id: 10,
		enonce: 'Quelle voiture voudriez-vous ?',
        reponses: [
            {   
                texte: 'A: Une électrique, c\'est plus écologique',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'B: Un diesel, ça consomme moins',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'C: Une essence, c\'est plus puissant',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'D: Une hybride, tout en un',
                tabScore: [0,0,0,1]
            }
        ],
        img: imgQ10
	},

    {
        id: 11,
		enonce: 'Vous préférez conduire sur :',
        reponses: [
            {   
                texte: 'A: Les virages de montagne',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'B: L’autoroute du soleil',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'C: Les nationales de campagne',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'D: Le périphérique parisien',
                tabScore: [0,0,1,0]
            }
        ],
        img: imgQ11
	},

    {
        id: 12,
		enonce: 'Quelle place préférez-vous ?',
        reponses: [
            {   
                texte: 'A: La place C, passager gauche',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'B: La place D, passager droit',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'C: La place A, le conducteur',
                tabScore: [1,0,0,0]
            },
            {   
                texte: 'D: La place B, passager avant',
                tabScore: [0,0,0,1]
            }
        ],
        img: imgQ12
	},

    {
        id: 13,
		enonce: 'Comment avez-vous réagi au piège de la question précédente ?',
        reponses: [
            {   
                texte: 'A: Quel piège ?',
                tabScore: [0,1,0,0]
            },
            {   
                texte: 'B: Je l’ai remarqué tout de suite.',
                tabScore: [0,0,0,1]
            },
            {   
                texte: 'C: Je vais te ***** espèce de ***** ** ***** !',
                tabScore: [0,0,1,0]
            },
            {   
                texte: 'D: C’est puéril, les gens risquent de se tromper.',
                tabScore: [1,0,0,0]
            }
        ],
        img: imgQ13
	},
]