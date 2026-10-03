export type ResearchEvidenceLevel =
  | 'Systematic Review'
  | 'Meta-analysis'
  | 'Randomized Controlled Trial Review'
  | 'Narrative Review'
  | 'Observational Study'
  | 'Background Reference'
  | 'Emerging Research'

export type ResearchCategory =
  | 'Music Therapy & Dementia'
  | 'Music & Neuroscience'
  | 'Carnatic Music & Musicology'

export type ResearchEvidenceLabel = 'Stronger evidence' | 'Emerging evidence' | 'Background context'

export interface ResearchSource {
  id: string
  category: ResearchCategory
  citation: string
  year: string
  evidenceLevel: ResearchEvidenceLevel
  summary: string
  keyFinding: string
  limitations: string[]
  relevance: string
  evidenceLabel: ResearchEvidenceLabel
  url?: string
  doi?: string
}

export const researchCategories: ResearchCategory[] = ['Music Therapy & Dementia', 'Music & Neuroscience', 'Carnatic Music & Musicology']
export const researchEvidenceLabels: ResearchEvidenceLabel[] = ['Stronger evidence', 'Emerging evidence', 'Background context']

export const researchSources: ResearchSource[] = [
  {
    id: 'mcdermott-2013', category: 'Music Therapy & Dementia', year: '2013', evidenceLevel: 'Systematic Review', evidenceLabel: 'Stronger evidence',
    citation: 'McDermott, O., Crellin, N., Ridder, H. M., & Orrell, M. (2013). Music therapy in dementia: A narrative synthesis systematic review.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23080214/',
    summary: 'This review synthesizes early controlled and qualitative studies on music therapy in dementia. It emphasizes that benefits are most visible when interventions are person-centered and delivered in supportive care contexts. The studies varied widely in methods, populations, and outcome measures. The paper is useful as a foundation because it frames music therapy as both a clinical and relational intervention.',
    keyFinding: 'Music therapy shows promise for agitation, mood, and quality of life, especially when individualized.',
    limitations: ['Studies were highly heterogeneous.', 'Interventions and outcome measures were not standardized.', 'Pooled conclusions were difficult to make.'],
    relevance: 'Supports a personalized approach rather than a one-size-fits-all music intervention.',
  },
  {
    id: 'cheng-2020', category: 'Music Therapy & Dementia', year: '2020', evidenceLevel: 'Meta-analysis', evidenceLabel: 'Stronger evidence',
    citation: 'Moreno-Morales, C., Calero, R., Moreno-Morales, P., & Pintado, C. (2020). Music therapy in the treatment of dementia: A systematic review and meta-analysis.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32509790/',
    summary: 'This review evaluates cognitive function, quality of life, and depression outcomes in dementia. Its meta-analysis reported improvements in cognition, post-intervention quality of life, and long-term depression, while finding no evidence of improvement in long-term quality of life or short-term depression.',
    keyFinding: 'The included studies reported benefits for some outcomes and time points, but not consistently across every measure.',
    limitations: ['Only eight studies were included.', 'Intervention types differed.', 'Studies used different outcome scales.', 'The authors called for standardized protocols and further clinical trials.'],
    relevance: 'Shows why outcomes and follow-up periods should be reported separately rather than summarized as one overall treatment effect.',
  },
  {
    id: 'song-2023', category: 'Music Therapy & Dementia', year: '2023', evidenceLevel: 'Randomized Controlled Trial Review', evidenceLabel: 'Stronger evidence',
    citation: 'Bleibel, M., El Cheikh, A., Sadier, N. S., & Abou-Abbas, L. (2023). The effect of music therapy on cognitive functions in patients with Alzheimer’s disease: A systematic review of randomized controlled trials.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36973733/',
    summary: 'This review focuses on randomized trials involving people with Alzheimer’s disease. It reports evidence of cognitive improvement, with stronger effects in studies involving active musical participation. It is especially useful because it separates Alzheimer’s disease from broader dementia populations and highlights the importance of intervention design.',
    keyFinding: 'Active participation in music may be more beneficial for cognition than passive listening.',
    limitations: ['Only eight studies met the inclusion criteria.', 'Long-term effects remain unclear.', 'Study designs and interventions varied.'],
    relevance: 'Suggests that future Carnatic music programs should consider participation, singing, rhythm, or guided engagement rather than listening alone.',
  },
  {
    id: 'li-2025', category: 'Music Therapy & Dementia', year: '2025', evidenceLevel: 'Meta-analysis', evidenceLabel: 'Stronger evidence',
    citation: 'Lu, L.-C., Lan, S.-H., Lan, S.-J., & Hsieh, Y.-P. (2025). Effectiveness of the music therapy in dementia: A systematic review and meta-analysis of randomized controlled trials.',
    url: 'https://karger.com/dem/article/54/3/167/915984/Effectiveness-of-the-Music-Therapy-in-Dementia-A',
    summary: 'This meta-analysis examines randomized trials across outcomes including cognition, depression, anxiety, behavior, and quality of life. It reports better cognition and lower depression and anxiety in music therapy groups. It also explores duration and frequency, making it useful for thinking about intervention design.',
    keyFinding: 'Benefits appeared strongest in programs lasting at least twelve weeks, with at least sixteen sessions and approximately eight total hours.',
    limitations: ['No significant overall improvement was found for behavior or quality of life.', 'Benefits depended on intervention intensity.', 'Results varied across studies.'],
    relevance: 'May help inform the duration and frequency of a future pilot, but should not be treated as a fixed prescription.',
  },
  {
    id: 'cochrane-2025', category: 'Music Therapy & Dementia', year: '2025', evidenceLevel: 'Systematic Review', evidenceLabel: 'Stronger evidence',
    citation: 'Cochrane. (2025, March 4). Music-based therapy may improve depressive symptoms in people with dementia.',
    url: 'https://www.cochrane.org/about-us/news/music-based-therapy-may-improve-depressive-symptoms-people-dementia',
    summary: 'This plain-language summary reports evidence from thirty studies involving 1,720 people. It suggests that music-based therapy probably improves depressive symptoms and may help with behavioral difficulties. Many studies were conducted in care homes, and longer-term effects remain uncertain.',
    keyFinding: 'Improvement in depressive symptoms appears to be one of the more consistent findings.',
    limitations: ['Much of the evidence comes from care-home settings.', 'Long-term follow-up is limited.', 'Effects may not generalize to every setting or individual.'],
    relevance: 'Supports describing music-based programs as potentially mood-supportive rather than curative.',
  },
  {
    id: 'koelsch-2018', category: 'Music & Neuroscience', year: '2018', evidenceLevel: 'Narrative Review', evidenceLabel: 'Background context',
    citation: 'Wang, S., & Agius, M. (2018). The neuroscience of music: A review and summary.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30439853/',
    summary: 'This review explains that music perception and performance rely on coordinated activity across multiple brain systems rather than one single music center. It highlights neural plasticity and the involvement of both hemispheres. It provides a broad biological explanation for why music can influence attention, memory, movement, and emotion.',
    keyFinding: 'Music engages distributed and plastic neural systems across the brain.',
    limitations: ['It is a broad review.', 'It does not test a specific therapy.', 'It does not focus on dementia or Carnatic music.'],
    relevance: 'Supports a careful brain-based explanation of why music may matter without claiming that music automatically produces clinical improvement.',
  },
  {
    id: 'zatorre-salimpoor-2013', category: 'Music & Neuroscience', year: '2013', evidenceLevel: 'Narrative Review', evidenceLabel: 'Background context',
    citation: 'Zatorre, R. J., & Salimpoor, V. N. (2013). From perception to pleasure: Music and its neural substrates.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23754373/',
    summary: 'This paper explains how auditory processing, expectation, pleasure, and reward systems interact during music listening. It is useful for understanding why music can feel motivating, meaningful, and emotionally powerful.',
    keyFinding: 'Music can recruit reward-related neural circuitry connected to pleasure and motivation.',
    limitations: ['It is not a clinical trial.', 'It does not study dementia directly.', 'It does not test Carnatic music.'],
    relevance: 'Helps explain how emotionally structured music may support engagement.',
  },
  {
    id: 'bello-2022', category: 'Music & Neuroscience', year: '2022', evidenceLevel: 'Narrative Review', evidenceLabel: 'Background context',
    citation: 'Vuust, P., Heggli, O. A., Friston, K. J., & Kringelbach, M. L. (2022). Music in the brain.',
    url: 'https://www.nature.com/articles/s41583-022-00578-5',
    summary: 'This review presents a modern account of music perception, action, emotion, and learning. It emphasizes predictive coding, meaning that the brain continually forms expectations about what may happen next in music.',
    keyFinding: 'Prediction and expectation help shape music’s emotional and cognitive effects.',
    limitations: ['It is theoretical and broad.', 'It does not test a therapeutic intervention.', 'It does not focus on Carnatic music.'],
    relevance: 'Provides a useful framework for explaining why structured and expectation-rich music can hold attention and create emotional response.',
  },
  {
    id: 'altenmuller-schlaug-2015', category: 'Music & Neuroscience', year: '2015', evidenceLevel: 'Narrative Review', evidenceLabel: 'Background context',
    citation: 'Altenmüller, E., & Schlaug, G. (2015). Apollo’s gift: New aspects of neurologic music therapy.',
    url: 'https://www.sciencedirect.com/science/article/pii/S0079612314000302',
    summary: 'This brief review discusses how musical activity can shape and stimulate brain circuits. It connects music, creativity, plasticity, and rehabilitation in an accessible way.',
    keyFinding: 'Musical activity can engage and stimulate specific brain circuits.',
    limitations: ['The paper is brief.', 'It is broad rather than disorder-specific.', 'It does not establish a dementia treatment effect.'],
    relevance: 'Supports the public-facing explanation of music as a structured form of brain engagement.',
  },
  {
    // TODO: Add verified article URL
    id: 'britannica-carnatic', category: 'Carnatic Music & Musicology', year: 'Not provided', evidenceLevel: 'Background Reference', evidenceLabel: 'Background context',
    citation: 'Encyclopaedia Britannica. Carnatic music.',
    summary: 'This reference introduces Carnatic music as a South Indian classical tradition with deep historical and cultural roots. It distinguishes Carnatic music from northern Indian classical traditions and provides accessible introductory context.',
    keyFinding: 'Carnatic music is a long-standing South Indian classical tradition.',
    limitations: ['This is a general reference source.', 'It is not a scientific or clinical study.'],
    relevance: 'Useful for explaining the cultural foundation of RagaMind.',
  },
  {
    id: 'karnatik-history', category: 'Carnatic Music & Musicology', year: 'Not provided', evidenceLevel: 'Background Reference', evidenceLabel: 'Background context',
    citation: 'Royal Carpet / karnATik. History of Carnatic music.',
    url: 'https://www.karnatik.com/history.shtml',
    summary: 'This source traces the historical development of Carnatic music through devotional, textual, compositional, and theoretical traditions. It discusses the emergence of ragas and the continuing evolution of the musical system.',
    keyFinding: 'Carnatic music developed across centuries of cultural, devotional, and compositional practice.',
    limitations: ['It is not peer reviewed.', 'It should be used as historical context, not scientific evidence.'],
    relevance: 'Helps explain continuity between tradition and modern exploration.',
  },
  {
    id: 'devadoss-aseervatham-2015', category: 'Carnatic Music & Musicology', year: '2015', evidenceLevel: 'Emerging Research', evidenceLabel: 'Emerging evidence',
    citation: 'Victor Devadoss, A., & Aseervatham, S. (2015). The emotional effect of semi-classical Carnatic music using linguistic aggregated fuzzy relational maps.',
    url: 'https://www.ijcaonline.org/archives/volume114/number2/19951-1767/',
    summary: 'This paper uses computational fuzzy methods to model emotional responses to selected Carnatic ragas. It treats emotion mapping as subjective and attempts to represent that subjectivity mathematically.',
    keyFinding: 'The authors report that a fuzzy modeling approach can represent emotional responses associated with selected Carnatic ragas.',
    limitations: ['The study has a narrow scope.', 'Its computational method is unusual.', 'Findings may not generalize broadly.', 'It does not demonstrate a clinical effect.'],
    relevance: 'May inform future exploration of emotion and raga selection, but should not be used to recommend ragas as treatment.',
  },
  {
    id: 'ramakrishnan-2016', category: 'Carnatic Music & Musicology', year: '2016', evidenceLevel: 'Emerging Research', evidenceLabel: 'Emerging evidence',
    citation: 'Balasubramanian, S. V. (2016). Analysis of emotions due to various aspects of Carnatic and world music.',
    url: 'https://vixra.org/mind/1601',
    summary: 'This dissertation-style source explores emotional responses to Carnatic ragas and musical features. It considers how swaras, tempo, octave, and other musical characteristics may contribute to emotional experience.',
    keyFinding: 'Musical features may be analyzed as part of an emotional profile.',
    limitations: ['It is not a standard peer-reviewed journal article.', 'It should be interpreted cautiously.', 'It does not establish clinical outcomes.'],
    relevance: 'Provides exploratory background for discussing how musical features may influence perceived emotion.',
  },
  {
    id: 'sankar-2024', category: 'Carnatic Music & Musicology', year: '2024', evidenceLevel: 'Observational Study', evidenceLabel: 'Emerging evidence',
    citation: 'Ghosh, A., Singh, S., Monisha, S., Jagtap, T., & Issac, T. G. (2024). Music and the aging brain: Exploring the role of long-term Carnatic music training on cognition and gray matter volumes.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11090532/',
    summary: 'This study examines older adults with long-term Carnatic musical activity and their cognitive functioning. It is relevant because it connects Carnatic music specifically with aging rather than studying music only in general.',
    keyFinding: 'Long-term Carnatic musical engagement may be associated with differences in cognitive functioning during aging.',
    limitations: ['The design is observational.', 'It cannot establish that Carnatic music caused the cognitive differences.', 'It is not a dementia therapy trial.'],
    relevance: 'Provides emerging Carnatic-specific support for studying music and aging while requiring cautious interpretation.',
  },
]
