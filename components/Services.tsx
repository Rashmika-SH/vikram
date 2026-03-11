'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const services = [
  { 
    icon: '♈', 
    title: 'Horoscope & Kundli Reading', 
    description: 'Detailed analysis of your birth chart revealing life purpose, karmic patterns, and planetary influences that shape your destiny.',
    image: '/services/horoscopes and kundli .png',
    fullDescription: `Unlock the secrets of your destiny with a comprehensive horoscope and Kundli reading. Your birth chart is a cosmic blueprint that reveals your life's purpose, strengths, challenges, and karmic patterns.

Our expert astrologers analyze the precise positions of planets at your birth time to provide deep insights into your personality, career potential, relationships, health, and spiritual path. We examine all 12 houses, planetary aspects, dashas, and transits to give you accurate predictions.

Discover your lucky numbers, favorable colors, gemstone recommendations, and auspicious timings for important life events. Whether you're facing career confusion, relationship issues, or seeking spiritual guidance, your Kundli holds the answers.

We provide detailed reports covering marriage compatibility, career prospects, financial gains, health concerns, and remedial measures. Our readings help you understand your past karma, present circumstances, and future possibilities.

Get personalized guidance on timing for marriage, business ventures, property purchases, and other major decisions. Learn about your strengths to leverage and weaknesses to overcome through specific mantras and rituals.

Understanding your birth chart empowers you to make informed decisions aligned with cosmic energies. We also analyze current planetary transits affecting your life and suggest remedies to minimize negative influences.

Our Kundli matching service ensures compatibility for marriage by analyzing Guna Milan, Manglik Dosha, and other crucial factors. Avoid future conflicts by understanding astrological compatibility before commitment.

Experience the ancient wisdom of Vedic astrology that has guided millions for thousands of years. Book your personalized horoscope reading today and step into a life of clarity and purpose.

Available for clients worldwide with detailed reports in English. Online consultations via video call, phone, or WhatsApp at your convenience.

Transform your life with cosmic guidance. Your destiny awaits discovery.`
  },
  { 
    icon: '💑', 
    title: 'Marriage & Divorce Problems', 
    description: 'Expert guidance to resolve marital conflicts, restore harmony, and navigate relationship challenges with astrological remedies.',
    image: '/services/divorce and marriage problems.png',
    fullDescription: `Save your marriage and restore harmony with powerful astrological solutions for marital problems. Whether facing constant arguments, lack of understanding, infidelity, or divorce threats, we provide effective remedies.

Our specialized marriage counseling combines Vedic astrology with spiritual healing to address root causes of conflicts. We analyze both partners' birth charts to identify planetary afflictions causing discord and misunderstanding.

Manglik Dosha, Saturn's influence, Rahu-Ketu effects, and 7th house afflictions often create marriage problems. We provide specific pujas, mantras, and gemstone recommendations to neutralize these negative influences.

Restore love, trust, and intimacy in your relationship through our proven remedies. We've helped thousands of couples overcome divorce situations and rebuild their marriages stronger than before.

Our services include compatibility analysis, identifying timing of conflicts through transit analysis, and providing remedies for specific issues like communication problems, financial stress, or interference from family members.

For those going through divorce, we offer guidance on favorable timing, legal outcome predictions, and emotional healing support. We also help with child custody concerns and property settlement matters.

Prevent divorce before it's too late. Early intervention with astrological remedies can save marriages that seem beyond repair. We address issues like extramarital affairs, lack of physical intimacy, and emotional disconnect.

Special pujas for Goddess Parvati and Lord Shiva strengthen marital bonds. We also perform Navagraha Shanti to balance planetary energies affecting your relationship.

Get personalized mantras, yantras, and ritual recommendations based on your specific situation. Our remedies work on energy levels to transform negative patterns into positive ones.

Available for urgent consultations worldwide. Confidential and compassionate guidance for all marriage-related concerns. Don't let your marriage fall apart - take action today.`
  },
  { 
    icon: '❤️', 
    title: 'Bring Back Lost Love', 
    description: 'Powerful spiritual solutions to reunite with your loved one, heal broken relationships, and restore emotional connections.',
    image: '/services/bring back lost love.png',
    fullDescription: `Reunite with your lost love through powerful spiritual rituals and astrological remedies. Whether your partner left due to misunderstandings, family pressure, or external influences, we can help bring them back.

Our specialized love reunion services use ancient Vedic mantras, Vashikaran techniques, and divine interventions to rekindle lost romance. We've successfully reunited thousands of separated couples worldwide.

The pain of separation is unbearable when you truly love someone. Our expert astrologers identify the astrological reasons behind the breakup and provide targeted solutions to reverse the situation.

We perform powerful attraction rituals that work on subtle energy levels to draw your loved one back to you. These time-tested methods influence their thoughts and emotions, making them remember the good times.

Our services include analyzing your relationship compatibility, identifying obstacles preventing reunion, and providing step-by-step remedies. We also offer protection from negative influences trying to keep you apart.

Whether your ex moved on, is in another relationship, or blocked all communication, our spiritual solutions can create opportunities for reconnection. We work with divine energies to soften their heart.

Special pujas dedicated to Kamdev (God of Love) and Rati Devi enhance attraction and desire. We also use specific mantras that must be chanted with proper pronunciation and timing for maximum effectiveness.

Get personalized talismans, yantras, and ritual instructions based on your birth chart and situation. Our remedies respect free will while creating favorable circumstances for reunion.

Results typically manifest within 21 to 45 days depending on the complexity of the situation. We provide ongoing support and guidance throughout the process until you achieve your desired outcome.

Don't lose hope. Love can be rekindled with the right spiritual approach. Contact us today for a confidential consultation and bring your beloved back into your life.`
  },
  { 
    icon: '🔮', 
    title: 'Love Spell & Vashikaran', 
    description: 'Ancient Vedic techniques to attract love, strengthen bonds, and influence positive outcomes in romantic relationships.',
    image: '/services/love spell and vashikaran.png',
    fullDescription: `Attract your desired partner and strengthen romantic bonds with authentic Vashikaran and love spell services. These ancient Vedic techniques have been used for centuries to influence love and relationships positively.

Vashikaran is a sacred spiritual practice that works on the subconscious mind to create attraction, desire, and emotional connection. When performed by experienced practitioners with pure intentions, it yields powerful results.

Our love spells help you attract a specific person, make someone fall in love with you, or intensify existing romantic feelings. We use personalized mantras based on your birth details for maximum effectiveness.

Whether you want to attract your crush, make your partner more committed, or prevent them from leaving, our Vashikaran services provide ethical solutions. We never use black magic or harmful techniques.

Our expert tantric practitioners perform rituals during auspicious muhurtas (timings) to ensure success. We use specific herbs, yantras, and offerings that amplify the power of mantras manifold.

Services include attraction spells for new love, commitment spells for serious relationships, passion spells for intimacy, and protection spells against rivals. Each spell is customized to your unique situation.

We also offer Mohini Vashikaran for irresistible attraction, Kamdev Vashikaran for passionate love, and Stri Vashikaran for controlling female partners (used ethically for relationship harmony).

Get detailed instructions on performing daily rituals, wearing specific colors, and using charged talismans. Our remedies work gradually but create lasting changes in your love life.

Results depend on planetary positions, karmic connections, and consistency in following instructions. Most clients experience positive changes within 2-4 weeks of starting the remedies.

Confidential consultations available worldwide. Transform your love life with ancient wisdom. Book your Vashikaran consultation today and manifest the relationship you desire.`
  },
  { 
    icon: '✋', 
    title: 'Palm Reading', 
    description: 'Discover your future through palmistry. Lines on your hands reveal career, love, health, and life path insights.',
    image: '/services/palm reading.png',
    fullDescription: `Discover your destiny written in the lines of your palms. Palmistry is an ancient science that reveals your personality, talents, relationships, career, health, and life events through hand analysis.

Your palms contain a complete map of your life journey. The major lines - heart line, head line, life line, and fate line - tell stories about your emotional nature, mental abilities, vitality, and career path.

Our expert palm readers analyze not just the lines but also hand shape, finger length, mounts, and markings to provide comprehensive insights. Each feature reveals specific aspects of your character and destiny.

Learn about your love life through the heart line - when you'll meet your soulmate, number of significant relationships, and marriage prospects. The marriage lines indicate timing and nature of partnerships.

Your career potential is revealed through the fate line, sun line, and Mercury finger. We identify your natural talents, best career paths, and timing for professional success or business ventures.

Health predictions from palm reading help you take preventive measures. Specific markings indicate potential health issues, allowing you to address them before they become serious problems.

The life line doesn't predict lifespan but shows your vitality, major life changes, and overall life quality. We also analyze travel lines, money lines, and intuition lines for complete guidance.

Children lines, education lines, and creativity indicators provide insights into family life, academic success, and artistic abilities. Every marking has significance in the grand scheme of your life.

For online consultations, simply send clear photos of both palms with fingers spread. We provide detailed written reports with diagrams explaining each finding and its implications.

Palm reading sessions include predictions for the next 5-10 years, remedies for negative indicators, and guidance on maximizing your potential. Discover what your hands reveal about your destiny today.`
  },
  { 
    icon: '🔮', 
    title: 'Psychic & Clairvoyant', 
    description: 'Connect with spiritual energies through psychic readings and tarot cards to gain clarity on life decisions and future events.',
    image: '/services/psychic.png',
    fullDescription: `Access higher spiritual guidance through authentic psychic and clairvoyant readings. Our gifted psychics connect with universal energies to provide clarity on your past, present, and future.

Clairvoyance is the ability to perceive information beyond normal sensory contact. Our experienced clairvoyants receive visions, messages, and insights from the spiritual realm to guide you through life's challenges.

Psychic readings help you understand your life purpose, soul mission, and karmic lessons. We connect with your spirit guides and guardian angels to receive divine messages meant specifically for you.

Our services include tarot card readings, crystal ball gazing, pendulum dowsing, and intuitive channeling. Each method provides unique insights into different aspects of your life and future possibilities.

Tarot cards reveal hidden truths about relationships, career decisions, financial matters, and spiritual growth. The cards act as a mirror reflecting your subconscious mind and future probabilities.

Get answers to specific questions about love, career, health, or any life situation. Our psychics tune into your energy field to provide accurate predictions and practical guidance for decision-making.

We also offer mediumship services to connect with departed loved ones, bringing closure, healing, and messages from the other side. Experience the comfort of knowing your loved ones are at peace.

Past life readings reveal karmic patterns affecting your current life. Understanding past life connections helps resolve unexplained fears, attractions, and recurring life themes.

Energy healing during psychic sessions clears blockages, removes negative attachments, and raises your vibration. Leave each session feeling lighter, clearer, and more empowered.

Available for in-depth consultations or quick yes/no questions. Experience the profound wisdom of psychic guidance and transform your life with spiritual clarity today.`
  },
  { 
    icon: '🌟', 
    title: 'Black Magic Removal', 
    description: 'Powerful protection rituals to remove negative energies, black magic, and evil influences affecting your life and wellbeing.',
    image: '/services/black magic removal.png',
    fullDescription: `Break free from black magic and dark sorcery with powerful removal rituals. If you're experiencing unexplained health issues, financial losses, relationship problems, or constant bad luck, you might be under black magic attack.

Black magic symptoms include sudden personality changes, nightmares, seeing shadows, feeling drained, unexplained pains, business failures, and family conflicts. These are signs someone has performed negative rituals against you.

Our expert tantric practitioners specialize in identifying and removing all types of black magic, witchcraft, voodoo, and evil spells. We use ancient Vedic mantras and protective rituals to break curses completely.

The removal process involves deep spiritual cleansing, cutting energetic cords to the perpetrator, and creating protective shields around you. We also identify who performed the black magic and their intentions.

We perform powerful counter-rituals using sacred fire ceremonies (Havan), Durga Saptashati path, and Hanuman Chalisa recitations. These divine invocations destroy negative energies and restore your natural state.

Our services include home cleansing to remove negative entities, amulet preparation for ongoing protection, and teaching you protective mantras. We ensure the black magic never returns.

Symptoms typically improve within 7-21 days of starting the removal process. Severe cases may require multiple sessions and specific pujas to completely eliminate the dark influences.

We also provide protection rituals for your family, business, and property. Black magic often affects entire households, causing collective suffering that seems to have no logical explanation.

Don't suffer in silence. Black magic is real and can destroy lives if left untreated. Our proven methods have helped thousands regain their health, prosperity, and peace of mind.

Confidential consultations available worldwide. Emergency services for severe cases. Reclaim your life from dark forces today with our powerful black magic removal services.`
  },
  { 
    icon: '🧿', 
    title: 'Nazar & Evil Spirit Removal', 
    description: 'Cleanse your aura from evil eye, negative spirits, and harmful energies with ancient spiritual protection techniques.',
    image: '/services/nazar and evil spirits.png',
    fullDescription: `Protect yourself from evil eye (Nazar) and malevolent spirits with powerful cleansing rituals. Evil eye is one of the most common causes of sudden misfortune, illness, and obstacles in life.

When someone looks at you with jealousy, envy, or ill intentions, their negative energy can attach to your aura causing problems. Children, successful people, and happy couples are especially vulnerable to evil eye.

Symptoms of Nazar include sudden health issues, business losses, accidents, relationship conflicts, and feeling constantly tired. You might also experience bad dreams, anxiety, and a sense of being watched.

Our evil eye removal services use traditional methods like lemon-chili rituals, salt cleansing, and protective mantras. We also prepare customized amulets and talismans for ongoing protection against negative gazes.

Evil spirits and negative entities can attach to people, homes, or businesses causing disturbances. Signs include strange noises, objects moving, cold spots, feeling of presence, and unexplained fear.

We perform spirit removal through powerful exorcism rituals, Hanuman puja, and Durga mantras. Our experienced practitioners safely remove entities and seal your space against future intrusions.

Home cleansing services include sage smudging, salt purification, and placing protective yantras at entry points. We also identify and seal energy portals that allow negative entities to enter.

For severe hauntings or possessions, we conduct intensive multi-day rituals involving fire ceremonies and divine invocations. These powerful methods force even the strongest entities to leave permanently.

Prevention is key. We teach you daily protection practices, mantras to chant, and how to recognize when you're under psychic attack. Regular spiritual hygiene prevents most negative attachments.

Don't let evil eye or spirits ruin your life. Get immediate relief with our proven removal techniques. Consultations available worldwide for individuals, families, and businesses seeking spiritual protection.`
  },
  { 
    icon: '😈', 
    title: 'Voodoo Removal', 
    description: 'Break free from voodoo curses and hexes with powerful counter-rituals and spiritual cleansing ceremonies.',
    image: '/services/vooodo removal.png',
    fullDescription: `Eliminate voodoo curses and hexes with specialized removal rituals. Voodoo is a powerful form of magic that can cause severe physical, mental, and spiritual harm when used with malicious intent.

Voodoo symptoms include chronic pain without medical cause, feeling like pins and needles in your body, seeing voodoo dolls in dreams, sudden personality changes, and unexplained injuries or marks on your body.

Our voodoo removal experts have deep knowledge of both African and Caribbean voodoo traditions. We understand how these spells work and know the exact counter-measures to break them completely.

The removal process involves identifying the type of voodoo used, locating any physical objects (dolls, photos, personal items) used in the spell, and performing powerful cleansing rituals to break the connection.

We use Vedic mantras combined with specific counter-voodoo techniques to neutralize the curse. This includes ritual baths, herbal cleansing, and burning specific items to release you from the spell's grip.

Voodoo often involves binding spells that prevent success, love spells that control behavior, or harm spells that cause illness. Each type requires different removal approaches which we customize to your situation.

Our services include full body spiritual cleansing, aura repair, chakra balancing, and installing protective shields. We also teach you how to recognize if someone is attempting voodoo against you again.

For severe cases involving voodoo possession or control, we perform intensive exorcism rituals. These multi-day ceremonies invoke powerful deities to break even the strongest voodoo bindings.

Results are often immediate with symptoms reducing significantly after the first session. Complete removal typically takes 2-3 weeks depending on how long you've been under the curse.

Don't let voodoo control your life. Our proven methods have freed countless victims from voodoo's grip. Contact us today for confidential consultation and reclaim your freedom from dark magic.`
  },
  { 
    icon: '🔥', 
    title: 'Jealousy & Curse Removal', 
    description: 'Remove jealousy-induced curses and negative intentions from enemies with protective mantras and spiritual remedies.',
    image: '/services/jealous and curse removal.png',
    fullDescription: `Break free from jealousy curses and enemy attacks with powerful protective rituals. Jealousy is one of the most destructive emotions that can manifest as curses affecting every area of your life.

When people envy your success, happiness, beauty, or relationships, their negative thoughts create energetic attacks. These jealousy-based curses cause sudden obstacles, failures, and misfortunes that seem to come from nowhere.

Symptoms include sudden business losses after success, relationships falling apart when things were going well, health issues appearing after achievements, and feeling like someone is constantly working against you.

Our curse removal services identify the source of jealousy, break the energetic connection, and return the negative energy to its sender. We use ancient Vedic techniques that have protected people for thousands of years.

We perform Baglamukhi puja to silence enemies and stop their harmful intentions. This powerful goddess specializes in defeating enemies, winning legal battles, and protecting from jealousy attacks.

Our rituals include creating protective shields around you, your family, and your business. We also prepare special amulets charged with mantras that deflect jealousy and evil intentions automatically.

For known enemies, we offer specific remedies to neutralize their power over you. This includes mantras to chant, yantras to keep, and rituals to perform on specific days for maximum protection.

We also teach you how to protect yourself daily through simple practices. Regular spiritual hygiene prevents most jealousy attacks from affecting you, keeping your energy field strong and impenetrable.

Curse removal shows results quickly with obstacles clearing, luck improving, and enemies losing their power to harm you. Most clients experience relief within 2-3 weeks of starting the remedies.

Don't let jealous people destroy your happiness. Protect yourself and your loved ones with our proven curse removal services. Available worldwide for urgent consultations and ongoing protection.`
  },
  { 
    icon: '🧙', 
    title: 'Witchcraft Removal', 
    description: 'Eliminate witchcraft spells and dark magic affecting your life through powerful Vedic rituals and divine protection.',
    image: '/services/witchcraft removal.png',
    fullDescription: `Remove witchcraft spells and dark magic with powerful counter-rituals. Witchcraft involves using supernatural powers to harm others, control their actions, or manipulate situations for personal gain.

Witchcraft symptoms include unexplained illnesses that doctors can't diagnose, sudden financial ruin, relationship breakdowns, mental confusion, nightmares with witches or demons, and finding strange objects near your home.

Our witchcraft removal specialists have extensive experience dealing with all forms of dark magic including European witchcraft, African juju, and tantric black magic. We know how to identify and break these spells completely.

The removal process begins with spiritual diagnosis to determine the type of witchcraft used, its source, and how deeply it has affected you. We then perform customized rituals to break the spell and heal the damage.

We use powerful Vedic mantras, fire ceremonies, and divine invocations to destroy witchcraft at its root. Our methods not only remove current spells but also prevent future attacks from the same source.

Witchcraft often involves binding spells, love spells, separation spells, or harm spells. Each requires specific counter-measures which we apply based on your unique situation and symptoms.

Our services include full spiritual cleansing, removing hexes from your home and workplace, breaking generational curses passed through family lines, and installing permanent protective barriers.

We also identify if someone close to you is practicing witchcraft against you. Sometimes family members, ex-partners, or jealous colleagues use dark magic, and knowing the source helps in complete removal.

Results typically manifest within 1-3 weeks with symptoms gradually disappearing. Severe cases may require multiple sessions and ongoing protection rituals to ensure the witchcraft doesn't return.

Don't suffer from witchcraft in silence. Our proven removal methods have helped thousands break free from dark magic's grip. Contact us today for confidential consultation and reclaim your life.`
  },
  { 
    icon: '🕉️', 
    title: 'Spiritual Healing & Stress', 
    description: 'Find inner peace and emotional balance through spiritual healing, meditation guidance, and stress relief techniques.',
    image: '/services/spiritual healing and stress.png',
    fullDescription: `Find inner peace and emotional balance through authentic spiritual healing. Modern life's stress, anxiety, and emotional turmoil can be healed through ancient spiritual practices that address root causes, not just symptoms.

Our spiritual healing services work on your energy body, clearing blockages in chakras, removing negative attachments, and restoring natural flow of life force. This creates deep healing on physical, emotional, and spiritual levels.

Stress manifests as anxiety, depression, insomnia, physical pain, and relationship problems. Our holistic approach addresses all these aspects simultaneously through meditation, mantra therapy, and energy healing.

We teach you powerful meditation techniques that calm the mind, reduce stress hormones, and create lasting inner peace. Regular practice transforms your response to life's challenges, making you resilient and centered.

Chakra balancing removes energy blockages causing emotional and physical issues. When your seven chakras are aligned and flowing freely, you experience vitality, clarity, mental peace, and spiritual connection.

Our healing sessions include Reiki energy healing, pranic healing, sound therapy with singing bowls, and guided visualization. These modalities work together to release trauma, heal emotional wounds, and restore wholeness.

We also provide personalized mantras based on your birth chart. Chanting these sacred sounds daily creates positive vibrations that transform your mental and emotional state from within.

Stress relief techniques include breathing exercises (Pranayama), yoga recommendations, dietary guidance according to Ayurveda, and lifestyle modifications that support your healing journey.

For severe anxiety, depression, or trauma, we offer intensive healing programs combining multiple modalities. These programs provide deep transformation and lasting relief from psychological suffering.

Experience the profound peace that comes from spiritual healing. Our compassionate healers guide you toward wholeness, helping you discover the calm, joyful, and empowered person you truly are.`
  },
  { 
    icon: '🙏', 
    title: 'Durga Mata Pujas', 
    description: 'Invoke the divine blessings of Goddess Durga for protection, strength, and victory over obstacles in life.',
    image: '/services/durga mata pujas.png',
    fullDescription: `Invoke the divine power of Goddess Durga for protection, strength, and victory over all obstacles. Durga Mata is the supreme warrior goddess who destroys evil forces and blesses devotees with courage and success.

Durga puja is performed to overcome enemies, win legal battles, remove obstacles in career or business, protect from negative energies, and gain strength during difficult times. The goddess's blessings bring immediate relief and long-term prosperity.

Our expert priests perform authentic Durga pujas following traditional Vedic procedures. We conduct Durga Saptashati path (700 verses), Durga Chalisa, and specific mantras for your intentions during auspicious muhurtas.

Different forms of Durga address specific needs: Mahakali for destroying enemies, Mahalakshmi for wealth and prosperity, Mahasaraswati for knowledge and wisdom. We recommend the appropriate form based on your situation.

Navratri is the most powerful time for Durga worship, but we also perform pujas throughout the year for urgent needs. Special pujas include Durga Havan (fire ceremony) and Durga Yantra installation for home protection.

Benefits of Durga puja include protection from accidents and dangers, victory in competitions and conflicts, removal of fear and anxiety, healing from diseases, and overall life transformation through divine grace.

We offer both in-person pujas at temples and remote pujas where we perform the ceremony on your behalf. You receive prasad (blessed offerings), photos/videos of the puja, and detailed instructions for post-puja practices.

For severe problems like black magic, enemy attacks, or life-threatening situations, we recommend intensive 9-day Durga Saptashati path. This powerful ritual invokes the goddess's full protective power.

Devotees often experience miraculous results after Durga puja - sudden resolution of long-standing problems, unexpected help arriving, enemies backing down, and doors opening where there were only walls.

Experience the transformative power of Durga Mata's blessings. Book your personalized puja today and invite divine protection and victory into your life.`
  },
  { 
    icon: '🕉️', 
    title: 'Kali Mata Pujas', 
    description: 'Powerful rituals dedicated to Goddess Kali for removing negativity, destroying evil forces, and spiritual transformation.',
    image: '/services/kali mata pujas.png',
    fullDescription: `Experience the fierce compassion of Goddess Kali through powerful tantric pujas. Kali Mata is the ultimate destroyer of evil, remover of darkness, and liberator of souls from suffering and ignorance.

Kali puja is performed for removing black magic, destroying enemies, breaking severe curses, overcoming addictions, and achieving spiritual liberation. The goddess's energy is intense and transformative, bringing rapid changes.

Our experienced tantric practitioners perform authentic Kali pujas following traditional Bengali and tantric traditions. These rituals are powerful and must be conducted with proper knowledge, respect, and spiritual preparation.

Different Kali mantras serve different purposes: Kali Gayatri for protection, Kali Beej mantra for power, Mahakali mantras for destroying enemies. We select appropriate mantras based on your specific needs and spiritual readiness.

Kali puja includes offerings of red flowers, incense, lamps, and specific items that please the goddess. The ceremony invokes her presence, and devotees often experience profound spiritual experiences during the ritual.

Benefits include immediate removal of negative energies, destruction of obstacles that seem impossible to overcome, protection from severe dangers, and deep spiritual awakening. Kali's grace transforms lives completely.

We offer Kali Havan (fire ceremony), Kali Yantra installation, and teaching of Kali mantras for daily practice. For serious practitioners, we provide initiation into Kali worship under proper guidance.

Kali puja is especially powerful during new moon nights (Amavasya), Kali Puja festival, and Tuesdays. However, for urgent situations, we can perform emergency pujas with proper preparations.

This is not for casual seekers. Kali worship requires sincerity, courage, and readiness for transformation. The goddess destroys everything false in your life to reveal your true divine nature.

If you're facing severe darkness, impossible obstacles, or seeking spiritual liberation, Kali Mata's blessings can transform your life. Contact us for consultation to see if Kali puja is right for you.`
  },
  { 
    icon: '🎰', 
    title: 'Lottery Luck', 
    description: 'Enhance your fortune and luck in gambling, lottery, and financial ventures with astrological remedies and lucky numbers.',
    image: '/services/lottery luck.png',
    fullDescription: `Enhance your luck in lottery, gambling, and financial ventures with powerful astrological remedies. While we cannot guarantee wins, we can significantly improve your fortune and timing through ancient Vedic techniques.

Your birth chart reveals your luck potential through the 5th house (speculation), 9th house (fortune), and Jupiter's position (prosperity). We analyze these factors to determine your lucky periods and numbers.

We provide personalized lucky numbers based on your numerology, birth chart, and current planetary transits. These numbers have higher probability of bringing success when used during favorable times.

Our lottery luck services include identifying auspicious days and times for playing, specific mantras to chant before gambling, gemstone recommendations to enhance Jupiter and Mercury, and rituals to attract wealth.

We perform Lakshmi puja (goddess of wealth) and Kuber puja (god of riches) to invoke divine blessings for financial gains. These pujas create positive energy around money and attract unexpected windfalls.

Gambling luck depends heavily on Mercury (intelligence), Jupiter (fortune), and Venus (luxury). We provide remedies to strengthen these planets in your chart, improving your overall luck quotient.

Our services include teaching you Lakshmi mantras, providing lucky colors to wear, suggesting favorable directions to face while playing, and creating personalized yantras for wealth attraction.

We also analyze your current Dasha (planetary period) to determine if this is a favorable time for speculation. Sometimes waiting for better planetary periods yields better results than forcing luck.

Many clients report improved wins, reduced losses, and better intuition about when to play after following our remedies. The key is consistency in performing the prescribed rituals and mantras.

Remember, gambling should be done responsibly. Our services enhance natural luck but don't encourage addiction or reckless behavior. Use these remedies wisely for occasional fortune, not as primary income.`
  },
  { 
    icon: '🐚', 
    title: 'Face & Shell Reading', 
    description: 'Ancient divination techniques using face reading and shell casting to predict future events and understand personality traits.',
    image: '/services/face and shell .png',
    fullDescription: `Discover your destiny through ancient face reading and shell divination. These time-tested methods reveal personality traits, future events, and hidden aspects of your life through careful analysis of facial features and shell patterns.

Face reading (Samudrika Shastra) is an ancient Vedic science that analyzes facial features, moles, lines, and proportions to understand character, destiny, and life events. Your face is a map of your soul and life journey.

We analyze forehead shape (intelligence and fortune), eyebrow patterns (temperament), eye characteristics (emotional nature), nose structure (wealth and career), lips (relationships), and chin (willpower and longevity).

Moles on different facial positions have specific meanings. A mole on the right cheek indicates financial success, while one on the left suggests struggles. We provide complete mole analysis for your face and body.

Facial lines reveal life experiences and future trends. Forehead lines indicate worry patterns, crow's feet show joy or stress, and nasolabial folds reveal health and longevity. Each line tells a story.

Shell reading (Cowrie shell divination) is an African and Caribbean practice we've integrated with Vedic astrology. Shells are cast and their patterns interpreted to answer specific questions about your future.

The way shells fall - face up or down, their positions relative to each other, and patterns they form - all carry messages from the spiritual realm. This method is especially accurate for yes/no questions and timing predictions.

We use shell reading for love questions, career decisions, health concerns, and identifying hidden enemies or opportunities. The shells reveal what's hidden and provide guidance on the best course of action.

For online consultations, send clear photos of your face from multiple angles. We provide detailed written reports explaining each facial feature's significance and predictions for different life areas.

Face and shell readings complement each other perfectly - face reading shows your inherent nature and destiny, while shell reading reveals current situations and near-future events. Together they provide complete guidance.`
  },
]

export default function Services() {
  const ref = useRef(null)
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" ref={ref} className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-cosmic-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 glow-text">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-400">Explore the mystical dimensions of your existence</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {services && services.length > 0 ? services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="relative p-4 sm:p-6 rounded-2xl cosmic-gradient glow-border cursor-pointer group overflow-hidden hover:scale-105 transition-transform w-full"
            >
              <div className="relative w-full h-32 sm:h-40 mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gray-800">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    console.log('Image failed to load:', service.image)
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cosmic-gold">{service.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{service.description}</p>
            </div>
          )) : <p className="text-white">No services available</p>}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cosmic-midnight border-2 border-cosmic-gold rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl text-cosmic-gold hover:text-white transition-colors z-10"
              >
                ✕
              </button>

              <div className="mb-4 sm:mb-6">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-cosmic-gold">{selectedService.title}</h2>
              
              <div className="text-sm sm:text-base text-gray-300 whitespace-pre-line leading-relaxed">
                {selectedService.fullDescription}
              </div>

              <motion.a
                href="#contact"
                onClick={() => setSelectedService(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 sm:mt-8 inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-cosmic-gold to-cosmic-blue rounded-full font-bold glow-border"
              >
                Book This Service
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
