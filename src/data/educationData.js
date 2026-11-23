// SmartStudy - Comprehensive Indian Education Dataset for Class 11 & 12 (CBSE & MP Board)

export const boards = [
  { id: 'cbse', name: 'CBSE Board', fullName: 'Central Board of Secondary Education', badge: 'CBSE 2025-26 Pattern' },
  { id: 'mpbse', name: 'MP Board', fullName: 'Madhya Pradesh Board of Secondary Education (MPBSE)', badge: 'MPBSE Blueprint Aligned' }
];

export const subjectsList = [
  {
    id: 'physics',
    name: 'Physics',
    hindiName: 'भौतिक विज्ञान',
    code: '042',
    icon: 'Atom',
    color: 'from-blue-600 to-indigo-700',
    lightBg: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Mechanics, Electrodynamics, Optics, Thermodynamics & Modern Physics with derivations and numericals.',
    class11ChaptersCount: 14,
    class12ChaptersCount: 14,
    featuredTopic: 'Gauss Law & Optics Derivations'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    hindiName: 'रसायन विज्ञान',
    code: '043',
    icon: 'FlaskConical',
    color: 'from-teal-600 to-emerald-700',
    lightBg: 'bg-teal-50 text-teal-700 border-teal-200',
    description: 'Physical, Inorganic & Organic Chemistry with IUPAC, reaction mechanisms, and NCERT name reactions.',
    class11ChaptersCount: 9,
    class12ChaptersCount: 10,
    featuredTopic: 'Aldehydes, Ketones & Electrochemistry'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    hindiName: 'गणित',
    code: '041',
    icon: 'Binary',
    color: 'from-amber-600 to-orange-700',
    lightBg: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Calculus, Vectors, 3D Geometry, Matrices, Probability, and coordinate geometry step-by-step proofs.',
    class11ChaptersCount: 14,
    class12ChaptersCount: 13,
    featuredTopic: 'Definite Integrals & 3D Lines'
  },
  {
    id: 'biology',
    name: 'Biology',
    hindiName: 'जीव विज्ञान',
    code: '044',
    icon: 'Dna',
    color: 'from-emerald-600 to-green-700',
    lightBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Genetics, Ecology, Human Physiology, Reproduction & Biotechnology with labeled NCERT diagrams.',
    class11ChaptersCount: 19,
    class12ChaptersCount: 13,
    featuredTopic: 'Molecular Basis of Inheritance'
  },
  {
    id: 'english',
    name: 'English Core',
    hindiName: 'अंग्रेजी',
    code: '301',
    icon: 'BookOpen',
    color: 'from-sky-600 to-blue-700',
    lightBg: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Flamingo & Vistas / Hornbill & Snapshots line-by-line summary, themes, character sketches, and writing skills.',
    class11ChaptersCount: 16,
    class12ChaptersCount: 14,
    featuredTopic: 'Notice, Job Application & The Last Lesson'
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    hindiName: 'कंप्यूटर साइंस',
    code: '083',
    icon: 'Terminal',
    color: 'from-violet-600 to-purple-700',
    lightBg: 'bg-violet-50 text-violet-700 border-violet-200',
    description: 'Python 3 Programming, SQL Database queries, Computer Networks, and society law cyber ethics.',
    class11ChaptersCount: 11,
    class12ChaptersCount: 9,
    featuredTopic: 'Python Functions, File Handling & SQL Joins'
  }
];

export const classData = {
  11: {
    title: 'Class 11 – Foundation & Concept Mastery',
    subtitle: 'Build strong fundamental concepts for Class 12 Boards and competitive exams like JEE & NEET.',
    highlights: [
      'Comprehensive NCERT chapter-wise theory & derivations',
      'Hindi & English medium explanations for MP Board & CBSE',
      'Exemplar numerical problems with detailed solutions',
      'Formula sheets, mind maps & unit-wise revision quizzes'
    ],
    stats: {
      studentsEnrolled: '24,500+',
      notesCount: '320+ Notes',
      testsCount: '180+ Tests',
      ncertSolutions: '100% Covered'
    },
    subjects: {
      physics: [
        {
          id: 'ch1',
          number: 1,
          name: 'Units and Measurements',
          weightage: '5 Marks',
          notesAvailable: true,
          ncertSolCount: 28,
          impQuestionsCount: 18,
          formulaCount: 12,
          summary: 'Dimensional analysis, SI units, significant figures, errors in measurement and applications of dimensions.',
          keyFormulas: [
            'Principle of Homogeneity: [LHS] = [RHS]',
            'Relative Error = Δa / a_mean',
            'Percentage Error = (Δa / a_mean) × 100%'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Motion in a Straight Line',
          weightage: '6 Marks',
          notesAvailable: true,
          ncertSolCount: 32,
          impQuestionsCount: 22,
          formulaCount: 15,
          summary: 'Kinematic equations for uniformly accelerated motion, calculus approach, relative velocity and motion graphs.',
          keyFormulas: [
            'v = u + at',
            's = ut + 1/2 at²',
            'v² = u² + 2as',
            's_nth = u + a/2(2n - 1)'
          ]
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Motion in a Plane',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 30,
          impQuestionsCount: 20,
          formulaCount: 18,
          summary: 'Vectors addition, resolution of vectors, projectile motion (maximum height, flight time, range), uniform circular motion.',
          keyFormulas: [
            'Time of Flight: T = (2u sin θ) / g',
            'Maximum Height: H = (u² sin² θ) / (2g)',
            'Horizontal Range: R = (u² sin 2θ) / g'
          ]
        },
        {
          id: 'ch4',
          number: 4,
          name: 'Laws of Motion',
          weightage: '8 Marks',
          notesAvailable: true,
          ncertSolCount: 35,
          impQuestionsCount: 25,
          formulaCount: 16,
          summary: 'Newton’s three laws, momentum conservation, static and kinetic friction, banking of roads, and free body diagrams (FBD).',
          keyFormulas: [
            'F = dp/dt = m(dv/dt) = ma',
            'Impulse = F × Δt = Δp',
            'Maximum Safe Speed on Banked Road: v_max = √[rg (tan θ + μ)/(1 - μ tan θ)]'
          ]
        },
        {
          id: 'ch5',
          number: 5,
          name: 'Work, Energy and Power',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 29,
          impQuestionsCount: 24,
          formulaCount: 14,
          summary: 'Work-energy theorem, conservative and non-conservative forces, conservation of mechanical energy, elastic and inelastic collisions.',
          keyFormulas: [
            'W = ∫ F · dr = F d cos θ',
            'Work-Energy Theorem: W_net = ΔK = K_f - K_i',
            'Power: P = dW/dt = F · v'
          ]
        },
        {
          id: 'ch6',
          number: 6,
          name: 'Thermodynamics',
          weightage: '9 Marks',
          notesAvailable: true,
          ncertSolCount: 26,
          impQuestionsCount: 22,
          formulaCount: 16,
          summary: 'Zeroth, First & Second law of thermodynamics, isothermal and adiabatic processes, Carnot engine efficiency.',
          keyFormulas: [
            'First Law: ΔQ = ΔU + ΔW',
            'Work in Isothermal Process: W = nRT ln(V2/V1)',
            'Adiabatic Relation: PV^γ = Constant'
          ]
        }
      ],
      chemistry: [
        {
          id: 'ch1',
          number: 1,
          name: 'Some Basic Concepts of Chemistry',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 36,
          impQuestionsCount: 25,
          formulaCount: 14,
          summary: 'Mole concept, molar mass, empirical and molecular formula, stoichiometry, molarity, molality and limiting reagent.',
          keyFormulas: [
            'Moles (n) = Mass / Molar Mass = Particles / 6.022×10²³',
            'Molarity (M) = Moles of solute / Volume of solution (in L)',
            'Molality (m) = Moles of solute / Mass of solvent (in kg)'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Structure of Atom',
          weightage: '9 Marks',
          notesAvailable: true,
          ncertSolCount: 42,
          impQuestionsCount: 28,
          formulaCount: 18,
          summary: 'Bohr model, de Broglie relation, Heisenberg uncertainty principle, quantum numbers (n, l, m, s), Aufbau and Pauli rules.',
          keyFormulas: [
            'E = hν = hc/λ',
            'de Broglie: λ = h / (mv)',
            'Uncertainty: Δx · Δp ≥ h / (4π)'
          ]
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Chemical Bonding & Molecular Structure',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 38,
          impQuestionsCount: 30,
          formulaCount: 10,
          summary: 'Lewis dot structures, VSEPR theory, hybridization (sp, sp2, sp3, sp3d), molecular orbital theory (MOT) and bond order.',
          keyFormulas: [
            'Bond Order = 1/2 (N_b - N_a)',
            'Formal Charge = V - L - 1/2 S'
          ]
        },
        {
          id: 'ch4',
          number: 4,
          name: 'Organic Chemistry – Some Basic Principles',
          weightage: '11 Marks',
          notesAvailable: true,
          ncertSolCount: 40,
          impQuestionsCount: 32,
          formulaCount: 15,
          summary: 'IUPAC nomenclature, inductive effect, resonance, hyperconjugation, carbocation/carbanion stability, isomerism.',
          keyFormulas: [
            'Carbocation Stability: 3° > 2° > 1° > Methyl',
            'Inductive effect decreases with distance'
          ]
        }
      ],
      mathematics: [
        {
          id: 'ch1',
          number: 1,
          name: 'Sets and Relations',
          weightage: '8 Marks',
          notesAvailable: true,
          ncertSolCount: 34,
          impQuestionsCount: 20,
          formulaCount: 12,
          summary: 'Subsets, power sets, Venn diagrams, Cartesian products, domain and range of relations and functions.',
          keyFormulas: [
            'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
            'Number of subsets of a set with n elements = 2^n'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Trigonometric Functions',
          weightage: '10 Marks',
          notesAvailable: true,
          ncertSolCount: 45,
          impQuestionsCount: 30,
          formulaCount: 28,
          summary: 'Radian measure, trigonometric identities, sum and difference formulas, multiple and submultiple angles.',
          keyFormulas: [
            'sin(A ± B) = sin A cos B ± cos A sin B',
            'cos(A ± B) = cos A cos B ∓ sin A sin B',
            'cos 2A = cos² A - sin² A = 2cos² A - 1 = 1 - 2sin² A'
          ]
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Limits and Derivatives',
          weightage: '12 Marks',
          notesAvailable: true,
          ncertSolCount: 40,
          impQuestionsCount: 26,
          formulaCount: 16,
          summary: 'Intuitive idea of limit, standard algebraic and trigonometric limits, first principle of derivative, product and quotient rules.',
          keyFormulas: [
            'lim(x→0) (sin x / x) = 1',
            'd/dx (u · v) = u v\' + v u\'',
            'd/dx (u / v) = (v u\' - u v\') / v²'
          ]
        }
      ],
      biology: [
        {
          id: 'ch1',
          number: 1,
          name: 'The Living World',
          weightage: '4 Marks',
          notesAvailable: true,
          ncertSolCount: 18,
          impQuestionsCount: 15,
          formulaCount: 5,
          summary: 'Characteristics of life, binomial nomenclature by Linnaeus, taxonomic hierarchy, and taxonomical aids.',
          keyFormulas: ['Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species']
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Cell: The Unit of Life',
          weightage: '9 Marks',
          notesAvailable: true,
          ncertSolCount: 28,
          impQuestionsCount: 22,
          formulaCount: 8,
          summary: 'Prokaryotic vs eukaryotic cell, fluid mosaic model of cell membrane, structure of mitochondria, chloroplast, ribosomes and nucleus.',
          keyFormulas: ['Singer & Nicolson (1972) - Fluid Mosaic Model']
        }
      ],
      english: [
        {
          id: 'ch1',
          number: 1,
          name: 'The Portrait of a Lady (Hornbill)',
          weightage: '5 Marks',
          notesAvailable: true,
          ncertSolCount: 14,
          impQuestionsCount: 12,
          formulaCount: 4,
          summary: 'Khushwant Singh’s emotional tribute to his grandmother, depicting three phases of their bond and her quiet spiritual dignity.',
          keyFormulas: ['Theme: Changing values, generation gap, unconditional grandmotherly love']
        },
        {
          id: 'ch2',
          number: 2,
          name: 'We’re Not Afraid to Die... If We Can All Be Together',
          weightage: '6 Marks',
          notesAvailable: true,
          ncertSolCount: 16,
          impQuestionsCount: 14,
          formulaCount: 4,
          summary: 'Gordon Cook and Alan East’s dramatic seafaring survival story aboard Wavewalker amidst stormy southern Indian Ocean waves.',
          keyFormulas: ['Theme: Courage, teamwork, determination, mental composure in crisis']
        }
      ],
      'computer-science': [
        {
          id: 'ch1',
          number: 1,
          name: 'Python Basics & Control Flow',
          weightage: '12 Marks',
          notesAvailable: true,
          ncertSolCount: 24,
          impQuestionsCount: 20,
          formulaCount: 10,
          summary: 'Variables, data types (int, float, string, list, tuple, dict), if-else ladder, for & while loops, break, continue and pass.',
          keyFormulas: ['for i in range(start, stop, step)', 'Immutable: int, float, tuple, str | Mutable: list, dict, set']
        }
      ]
    }
  },
  12: {
    title: 'Class 12 – Board Exam Mission 95%+',
    subtitle: 'Strictly aligned with latest CBSE 2024-25/2025-26 Pattern & MP Board Blueprint with Chapter-wise PYQs.',
    highlights: [
      '50% Competency-based and assertion-reason questions for CBSE',
      'MP Board 5-year Blueprint & previous question bank solutions',
      'Step-by-step NCERT solutions with official marking schemes',
      'High-yield formula cheat sheets & Organic named reactions map'
    ],
    stats: {
      studentsEnrolled: '42,000+',
      notesCount: '450+ Notes',
      testsCount: '250+ Tests',
      ncertSolutions: '100% Solved'
    },
    subjects: {
      physics: [
        {
          id: 'ch1',
          number: 1,
          name: 'Electric Charges and Fields',
          weightage: '8 Marks (Unit I)',
          notesAvailable: true,
          ncertSolCount: 34,
          impQuestionsCount: 28,
          formulaCount: 18,
          summary: 'Coulomb’s law in vector form, electric field on axial and equatorial points of dipole, Gauss law and its 3 applications.',
          keyFormulas: [
            'Coulomb\'s Law: F = (1 / 4πε₀) · (q₁q₂ / r²)',
            'Dipole Moment: p = q · (2a)',
            'E_axial = (1 / 4πε₀) · (2p / r³)',
            'E_equatorial = (1 / 4πε₀) · (p / r³)',
            'Gauss Law: ∮ E · dA = q_enclosed / ε₀',
            'Infinitely Long Wire: E = λ / (2πε₀r)'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Electrostatic Potential & Capacitance',
          weightage: '8 Marks (Unit I)',
          notesAvailable: true,
          ncertSolCount: 36,
          impQuestionsCount: 26,
          formulaCount: 20,
          summary: 'Electric potential, equipotential surfaces, potential energy of dipole, parallel plate capacitor, dielectric slab insertion.',
          keyFormulas: [
            'V = (1 / 4πε₀) · (q / r)',
            'Capacitance: C = ε₀A / d (with dielectric: C = K · C₀)',
            'Energy Stored in Capacitor: U = 1/2 CV² = Q² / (2C)',
            'Energy Density: u = 1/2 ε₀ E²'
          ]
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Current Electricity',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 40,
          impQuestionsCount: 32,
          formulaCount: 22,
          summary: 'Drift velocity derivation, Ohm\'s law microscopic form, temperature dependence of resistivity, Kirchhoff\'s rules, Wheatstone bridge.',
          keyFormulas: [
            'Drift Velocity: v_d = - (e E τ) / m',
            'Current: I = n e A v_d',
            'Kirchhoff\'s Junction Law: Σ I = 0',
            'Kirchhoff\'s Loop Law: Σ ΔV = 0',
            'Balanced Wheatstone Bridge: P/Q = R/S'
          ]
        },
        {
          id: 'ch4',
          number: 4,
          name: 'Moving Charges and Magnetism',
          weightage: '9 Marks (Unit III)',
          notesAvailable: true,
          ncertSolCount: 32,
          impQuestionsCount: 28,
          formulaCount: 19,
          summary: 'Biot-Savart law, circular loop magnetic field, Ampere circuital law, force between two parallel currents, moving coil galvanometer.',
          keyFormulas: [
            'Biot-Savart Law: dB = (μ₀/4π) · (I dl sin θ / r²)',
            'Field at center of circular coil: B = μ₀ N I / (2R)',
            'Force between parallel wires: F/L = (μ₀ I₁ I₂) / (2π d)',
            'Galvanometer into Ammeter: S = (I_g · G) / (I - I_g)'
          ]
        },
        {
          id: 'ch5',
          number: 5,
          name: 'Ray Optics and Optical Instruments',
          weightage: '10 Marks',
          notesAvailable: true,
          ncertSolCount: 38,
          impQuestionsCount: 34,
          formulaCount: 24,
          summary: 'Total internal reflection & optical fibres, lens maker’s formula, prism refraction formula, compound microscope & astronomical telescope.',
          keyFormulas: [
            'Lens Maker\'s Formula: 1/f = (μ - 1)(1/R₁ - 1/R₂)',
            'Prism Formula: μ = sin[(A + D_m)/2] / sin(A/2)',
            'Compound Microscope Magnification: m = - (L / f_o)(1 + D / f_e)',
            'Telescope Normal Adjustment: m = - f_o / f_e, Length = f_o + f_e'
          ]
        },
        {
          id: 'ch6',
          number: 6,
          name: 'Semiconductor Electronics: Materials & Devices',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 25,
          impQuestionsCount: 22,
          formulaCount: 10,
          summary: 'Intrinsic & extrinsic semiconductors, p-n junction diode forward and reverse bias, half-wave and full-wave rectifiers.',
          keyFormulas: [
            'Mass Action Law: n_e · n_h = n_i²',
            'Full Wave Rectifier Ripple Frequency = 2 × Input Frequency',
            'Rectifier Efficiency: η_max = 81.2%'
          ]
        }
      ],
      chemistry: [
        {
          id: 'ch1',
          number: 1,
          name: 'Solutions',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 35,
          impQuestionsCount: 28,
          formulaCount: 16,
          summary: 'Raoult’s law for volatile solutes, ideal and non-ideal solutions, 4 colligative properties, van’t Hoff factor for dissociation & association.',
          keyFormulas: [
            'Relative Lowering of Vapour Pressure: (P° - P)/P° = i · x_B',
            'Elevation in Boiling Point: ΔT_b = i · K_b · m',
            'Depression in Freezing Point: ΔT_f = i · K_f · m',
            'Osmotic Pressure: π = i C R T',
            'van\'t Hoff Factor: i = 1 + (n - 1)α'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Electrochemistry',
          weightage: '9 Marks',
          notesAvailable: true,
          ncertSolCount: 42,
          impQuestionsCount: 30,
          formulaCount: 18,
          summary: 'Nernst equation, Gibbs energy of cell reaction, Kohlrausch’s law, molar conductivity, Faraday’s laws of electrolysis and fuel cells.',
          keyFormulas: [
            'Nernst Equation: E_cell = E°_cell - (0.0591 / n) log Q',
            'ΔG° = - n F E°_cell',
            'Kohlrausch Law: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋',
            'Faraday\'s First Law: m = Z · I · t'
          ]
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Chemical Kinetics',
          weightage: '7 Marks',
          notesAvailable: true,
          ncertSolCount: 30,
          impQuestionsCount: 26,
          formulaCount: 14,
          summary: 'Order and molecularity, integrated rate equations for zero and first order, half-life formula, Arrhenius equation and activation energy.',
          keyFormulas: [
            'First Order Rate Constant: k = (2.303 / t) log([A₀]/[A])',
            'Half-life First Order: t_1/2 = 0.693 / k',
            'Arrhenius Equation: log(k₂/k₁) = (E_a / 2.303R) · [(T₂ - T₁)/(T₁T₂)]'
          ]
        },
        {
          id: 'ch4',
          number: 4,
          name: 'Aldehydes, Ketones and Carboxylic Acids',
          weightage: '8 Marks',
          notesAvailable: true,
          ncertSolCount: 38,
          impQuestionsCount: 32,
          formulaCount: 20,
          summary: 'Nucleophilic addition reactions, Aldol condensation, Cannizzaro reaction, Clemmensen and Wolff-Kishner reductions, Hell-Volhard-Zelinsky (HVZ).',
          keyFormulas: [
            'Rosenmund Reduction: R-COCl + H₂ --(Pd/BaSO₄)--> R-CHO',
            'Aldol Condensation: requires α-hydrogen',
            'Cannizzaro Reaction: no α-hydrogen, disproportionation'
          ]
        }
      ],
      mathematics: [
        {
          id: 'ch1',
          number: 1,
          name: 'Matrices and Determinants',
          weightage: '10 Marks',
          notesAvailable: true,
          ncertSolCount: 48,
          impQuestionsCount: 30,
          formulaCount: 18,
          summary: 'Matrix operations, symmetric and skew-symmetric, adjoint and inverse of matrix, solving system of linear equations by matrix method.',
          keyFormulas: [
            'A · adj(A) = |A| I',
            'A⁻¹ = (1 / |A|) · adj(A)',
            'System of Equations: X = A⁻¹ B',
            '|A · B| = |A| · |B|'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Continuity and Differentiability',
          weightage: '9 Marks',
          notesAvailable: true,
          ncertSolCount: 52,
          impQuestionsCount: 35,
          formulaCount: 20,
          summary: 'Continuity at a point, chain rule, derivatives of inverse trigonometric functions, logarithmic differentiation, parametric differentiation.',
          keyFormulas: [
            'd/dx (sin⁻¹ x) = 1 / √(1 - x²)',
            'd/dx (tan⁻¹ x) = 1 / (1 + x²)',
            'Logarithmic Diff: y = f(x)^g(x) => ln y = g(x) ln f(x)'
          ]
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Integrals (Calculus Core)',
          weightage: '12 Marks',
          notesAvailable: true,
          ncertSolCount: 65,
          impQuestionsCount: 40,
          formulaCount: 30,
          summary: 'Integration by substitution, partial fractions, integration by parts (ILATE rule), fundamental theorem of calculus, definite integral properties.',
          keyFormulas: [
            '∫ u v dx = u ∫ v dx - ∫ [u\' ∫ v dx] dx',
            '∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b - x) dx',
            '∫₀²ᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx  if f(2a - x) = f(x)'
          ]
        },
        {
          id: 'ch4',
          number: 4,
          name: 'Vectors and 3D Geometry',
          weightage: '14 Marks',
          notesAvailable: true,
          ncertSolCount: 44,
          impQuestionsCount: 32,
          formulaCount: 22,
          summary: 'Dot product and cross product, direction cosines, vector equation of a line, shortest distance between two skew lines.',
          keyFormulas: [
            'Shortest Distance between Skew Lines: d = |(b₁ × b₂) · (a₂ - a₁)| / |b₁ × b₂|',
            'Angle between Vectors: cos θ = (a · b) / (|a| |b|)',
            'Cross Product: |a × b| = |a| |b| sin θ'
          ]
        }
      ],
      biology: [
        {
          id: 'ch1',
          number: 1,
          name: 'Sexual Reproduction in Flowering Plants',
          weightage: '6 Marks',
          notesAvailable: true,
          ncertSolCount: 26,
          impQuestionsCount: 24,
          formulaCount: 8,
          summary: 'Microsporogenesis, megasporogenesis, pollen-pistil interaction, double fertilization (syngamy + triple fusion), endosperm development.',
          keyFormulas: ['Double Fertilization: Syngamy (Zygote 2n) + Triple Fusion (PEN 3n)']
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Principles of Inheritance & Variation',
          weightage: '8 Marks',
          notesAvailable: true,
          ncertSolCount: 30,
          impQuestionsCount: 28,
          formulaCount: 12,
          summary: 'Mendelian monohybrid (3:1) and dihybrid (9:3:3:1) crosses, incomplete dominance, codominance, linkage and recombination by Morgan.',
          keyFormulas: ['Monohybrid Genotypic: 1:2:1 | Dihybrid Phenotypic: 9:3:3:1']
        },
        {
          id: 'ch3',
          number: 3,
          name: 'Molecular Basis of Inheritance',
          weightage: '10 Marks',
          notesAvailable: true,
          ncertSolCount: 32,
          impQuestionsCount: 30,
          formulaCount: 10,
          summary: 'DNA structure (Watson & Crick), semi-conservative replication (Meselson-Stahl), transcription, genetic code properties, Lac Operon.',
          keyFormulas: ['Central Dogma: DNA -> RNA -> Protein (Transcription & Translation)']
        }
      ],
      english: [
        {
          id: 'ch1',
          number: 1,
          name: 'The Last Lesson (Flamingo)',
          weightage: '6 Marks',
          notesAvailable: true,
          ncertSolCount: 18,
          impQuestionsCount: 15,
          formulaCount: 5,
          summary: 'Alphonse Daudet’s poignant tale set in Alsace during Franco-Prussian war, M. Hamel’s final French class, linguistic chauvinism.',
          keyFormulas: ['"Vive La France!" - Symbol of national identity and pride in mother tongue']
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Lost Spring: Stories of Stolen Childhood',
          weightage: '6 Marks',
          notesAvailable: true,
          ncertSolCount: 20,
          impQuestionsCount: 16,
          formulaCount: 5,
          summary: 'Anees Jung investigates grinding poverty of ragpickers in Seemapuri (Saheb-e-Alam) and bangle makers of Firozabad (Mukesh).',
          keyFormulas: ['Themes: Child labour, vicious circle of poverty, sahukars and police exploitation']
        }
      ],
      'computer-science': [
        {
          id: 'ch1',
          number: 1,
          name: 'Functions & File Handling in Python',
          weightage: '15 Marks',
          notesAvailable: true,
          ncertSolCount: 28,
          impQuestionsCount: 24,
          formulaCount: 12,
          summary: 'User-defined functions, scope (LEGB rule), text file reading/writing (read, readline, readlines), binary files with pickle module.',
          keyFormulas: [
            'pickle.dump(data, file_obj) & pickle.load(file_obj)',
            'open("file.txt", "r+") - Read and Write mode'
          ]
        },
        {
          id: 'ch2',
          number: 2,
          name: 'Database Management & SQL Queries',
          weightage: '20 Marks',
          notesAvailable: true,
          ncertSolCount: 30,
          impQuestionsCount: 25,
          formulaCount: 15,
          summary: 'Relational model, Primary and Foreign keys, DDL (CREATE, ALTER) vs DML (SELECT, UPDATE, INSERT, DELETE), GROUP BY, HAVING, and JOINs.',
          keyFormulas: [
            'SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5;',
            'Equi-Join: SELECT * FROM t1, t2 WHERE t1.id = t2.id;'
          ]
        }
      ]
    }
  }
};

// 6 Core Study Resources
export const studyResourcesCategories = [
  {
    id: 'ncert-solutions',
    title: 'NCERT Solutions',
    hindiTitle: 'एनसीईआरटी समाधान',
    icon: 'CheckCircle2',
    badge: '100% Step-by-Step',
    color: 'border-blue-500 text-blue-600 bg-blue-50',
    description: 'Detailed, error-free step-by-step solutions for all in-text and exercise questions from latest revised NCERT textbooks.'
  },
  {
    id: 'chapter-notes',
    title: 'Chapter-wise Notes',
    hindiTitle: 'अध्यायवार नोट्स',
    icon: 'FileText',
    badge: 'Topper Handwritten & Crisp',
    color: 'border-teal-500 text-teal-600 bg-teal-50',
    description: 'Curated revision notes covering key definitions, labeled diagrams, derivations, and memory tricks for rapid last-minute revision.'
  },
  {
    id: 'important-questions',
    title: 'Important Questions',
    hindiTitle: 'महत्वपूर्ण प्रश्न (3M, 5M)',
    icon: 'HelpCircle',
    badge: 'With Marking Scheme',
    color: 'border-amber-500 text-amber-600 bg-amber-50',
    description: 'Categorized by 1-mark MCQs, 2-mark short, 3-mark conceptual, 5-mark derivations, and CBSE Case Study questions.'
  },
  {
    id: 'pyq-papers',
    title: 'Previous Year Papers',
    hindiTitle: 'विगत वर्षों के प्रश्न पत्र (PYQs)',
    icon: 'History',
    badge: '2019 - 2024 Solved',
    color: 'border-purple-500 text-purple-600 bg-purple-50',
    description: 'Authentic 5 to 10-year board examination question papers with official step-wise answer keys and MP Board blueprints.'
  },
  {
    id: 'sample-papers',
    title: 'Sample Papers (SQP)',
    hindiTitle: 'आदर्श प्रश्न पत्र 2025',
    icon: 'Layers',
    badge: 'Latest 2025-26 Pattern',
    color: 'border-emerald-500 text-emerald-600 bg-emerald-50',
    description: 'Official CBSE and MPBSE model test papers with blueprint analysis, marks distribution, and time-management tips.'
  },
  {
    id: 'formula-sheets',
    title: 'Formula Sheets & Mind Maps',
    hindiTitle: 'सूत्र एवं माइंड मैप',
    icon: 'Sparkles',
    badge: 'High-Yield Sheet',
    color: 'border-rose-500 text-rose-600 bg-rose-50',
    description: 'Quick-reference formula cheat sheets for Physics & Maths, and Organic Chemistry reaction flowcharts for instant recall.'
  }
];

// Interactive Mock Test Series Data
export const mockTests = [
  {
    id: 'test-12-phy-01',
    title: 'Class 12 Physics: Electrostatics & Current Electricity',
    category: 'Chapter Test',
    class: '12',
    subject: 'Physics',
    board: 'Both (CBSE & MP Board)',
    durationMinutes: 25,
    totalQuestions: 10,
    totalMarks: 40,
    difficulty: 'Board Level',
    questions: [
      {
        id: 1,
        question: 'Two point charges +q and -q are placed at distance 2a. What is the electric field intensity at the midpoint between them?',
        options: [
          'Zero',
          '(2q) / (4πε₀ a²)',
          '(q) / (4πε₀ a²)',
          '(q) / (2πε₀ a²)'
        ],
        correct: 1,
        explanation: 'At the midpoint, the electric fields due to +q and -q both point in the same direction towards -q. E_net = E₁ + E₂ = (q / 4πε₀ a²) + (q / 4πε₀ a²) = (2q / 4πε₀ a²).'
      },
      {
        id: 2,
        question: 'Which of the following quantity remains unchanged when a dielectric slab is inserted into a charged capacitor disconnected from the battery?',
        options: [
          'Capacitance (C)',
          'Electric Charge (Q)',
          'Potential Difference (V)',
          'Stored Energy (U)'
        ],
        correct: 1,
        explanation: 'When disconnected from the battery, charge Q has no path to flow, so Q remains constant. Capacitance increases to KC, voltage drops to V/K, and energy decreases to U/K.'
      },
      {
        id: 3,
        question: 'A wire of resistance R is stretched uniformly to double its original length. What will be its new resistance?',
        options: [
          '2R',
          '4R',
          'R / 2',
          'R / 4'
        ],
        correct: 1,
        explanation: 'When stretched to length 2L, volume remains constant (A\' · 2L = A · L => A\' = A/2). New resistance R\' = ρ(2L)/(A/2) = 4 · (ρL/A) = 4R.'
      },
      {
        id: 4,
        question: 'In a balanced Wheatstone bridge, the galvanometer shows null deflection because:',
        options: [
          'The battery is discharged',
          'The potentials at the two galvanometer terminals are equal',
          'The resistance of galvanometer is infinite',
          'The current in all arms is equal'
        ],
        correct: 1,
        explanation: 'Null deflection occurs when potential difference across the galvanometer is zero, meaning V_B = V_D.'
      },
      {
        id: 5,
        question: 'Assertion (A): Electric field lines never intersect each other.\nReason (R): At the point of intersection, there would be two tangents indicating two different directions of electric field at that single point.',
        options: [
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        correct: 0,
        explanation: 'If two electric field lines intersect, the tangent at that point would yield two unique directions of force, which is physically impossible.'
      }
    ]
  },
  {
    id: 'test-12-chem-01',
    title: 'Class 12 Chemistry: Solutions & Electrochemistry Rapid Drill',
    category: 'Subject-wise Test',
    class: '12',
    subject: 'Chemistry',
    board: 'CBSE & MP Board',
    durationMinutes: 20,
    totalQuestions: 8,
    totalMarks: 32,
    difficulty: 'Moderate',
    questions: [
      {
        id: 1,
        question: 'Which of the following 0.1 M aqueous solutions will exhibit the highest boiling point elevation?',
        options: [
          '0.1 M Glucose',
          '0.1 M NaCl',
          '0.1 M BaCl₂',
          '0.1 M Al₂(SO₄)₃'
        ],
        correct: 3,
        explanation: 'ΔT_b = i · K_b · m. For Al₂(SO₄)₃, van’t Hoff factor i = 2 + 3 = 5, which is the highest among all given options.'
      },
      {
        id: 2,
        question: 'The unit of cell constant of an electrolytic cell is:',
        options: [
          'ohm⁻¹ cm⁻¹',
          'cm⁻¹',
          'ohm cm',
          'S cm² mol⁻¹'
        ],
        correct: 1,
        explanation: 'Cell constant = l / A, where l is distance (cm) and A is cross-sectional area (cm²). Therefore, the unit is cm / cm² = cm⁻¹.'
      },
      {
        id: 3,
        question: 'The relationship between molar conductivity (Λ_m) and concentration (c) for a strong electrolyte according to Debye-Hückel-Onsager is:',
        options: [
          'Λ_m = Λ°_m - A √c',
          'Λ_m = Λ°_m + A c',
          'Λ_m = Λ°_m / √c',
          'Λ_m = A √c'
        ],
        correct: 0,
        explanation: 'For strong electrolytes, the Debye-Hückel-Onsager equation is Λ_m = Λ°_m - A √c.'
      }
    ]
  },
  {
    id: 'test-12-math-01',
    title: 'Class 12 Mathematics: Calculus & Matrices Board Mock',
    category: 'Full-length Mock',
    class: '12',
    subject: 'Mathematics',
    board: 'Board Full Mock',
    durationMinutes: 45,
    totalQuestions: 10,
    totalMarks: 50,
    difficulty: 'Exam Level',
    questions: [
      {
        id: 1,
        question: 'If A is a square matrix of order 3 and |A| = 5, then the value of |adj(A)| is:',
        options: [
          '5',
          '25',
          '125',
          '1 / 5'
        ],
        correct: 1,
        explanation: 'For a square matrix of order n, |adj(A)| = |A|^(n - 1). Here n = 3, so |adj(A)| = 5^(3 - 1) = 5² = 25.'
      },
      {
        id: 2,
        question: 'The value of ∫ [e^x (1 + x)] / cos²(x e^x) dx is equal to:',
        options: [
          'tan(x e^x) + C',
          '-tan(x e^x) + C',
          'cot(x e^x) + C',
          'sec(x e^x) + C'
        ],
        correct: 0,
        explanation: 'Let t = x e^x. Then dt = (x e^x + e^x) dx = e^x(1 + x) dx. The integral becomes ∫ sec²(t) dt = tan(t) + C = tan(x e^x) + C.'
      }
    ]
  },
  {
    id: 'test-11-phy-01',
    title: 'Class 11 Physics: Kinematics & Laws of Motion',
    category: 'Chapter Test',
    class: '11',
    subject: 'Physics',
    board: 'CBSE & MP Board',
    durationMinutes: 20,
    totalQuestions: 6,
    totalMarks: 24,
    difficulty: 'Fundamental',
    questions: [
      {
        id: 1,
        question: 'A projectile is thrown at an angle of 45° with the horizontal. Its horizontal range is equal to:',
        options: [
          'Half of maximum height',
          'Equal to maximum height',
          'Four times its maximum height',
          'Twice its maximum height'
        ],
        correct: 2,
        explanation: 'At θ = 45°, R = u²/g. Maximum height H = (u² sin² 45°)/(2g) = u²/(4g). Hence, R = 4H.'
      },
      {
        id: 2,
        question: 'What is the dimensional formula for Coefficient of Viscosity (η)?',
        options: [
          '[M L⁻¹ T⁻¹]',
          '[M L⁻¹ T⁻²]',
          '[M L T⁻¹]',
          '[M L² T⁻²]'
        ],
        correct: 0,
        explanation: 'From Stokes\' law F = 6πηrv, η = F / (6πrv) = [M L T⁻²] / ([L] [L T⁻¹]) = [M L⁻¹ T⁻¹].'
      }
    ]
  }
];

// Latest Board Exam Announcements & Notifications
export const boardUpdates = [
  {
    id: 'update-1',
    date: 'February 2025',
    tag: 'CBSE Date Sheet',
    type: 'CBSE',
    title: 'CBSE Class 10th & 12th Board Examination 2025 Official Schedule',
    desc: 'CBSE has officially published the Class 12th practical exam guidelines and board theory date sheet. Major science stream papers commence from mid-February.',
    pdfSize: '1.4 MB',
    isUrgent: true,
    linkText: 'Download Schedule PDF'
  },
  {
    id: 'update-2',
    date: 'January 2025',
    tag: 'MPBSE Blueprint',
    type: 'MP Board',
    title: 'MP Board Class 12 Blueprint & Question Bank for Hindi & English Medium',
    desc: 'Madhya Pradesh Board of Secondary Education (mpbse.nic.in) releases revised chapter-wise marks weightage and object-type questions bank for 2024-25 session.',
    pdfSize: '2.1 MB',
    isUrgent: true,
    linkText: 'Check MPBSE Blueprint'
  },
  {
    id: 'update-3',
    date: 'January 2025',
    tag: 'Curriculum Change',
    type: 'CBSE',
    title: 'CBSE Increases Competency-Based Questions to 50% for Class 11 & 12',
    desc: 'In compliance with National Education Policy (NEP 2020), 50% weightage given to case-based, assertion-reason and analytical questions in 2025 board papers.',
    pdfSize: '850 KB',
    isUrgent: false,
    linkText: 'Read Circular'
  },
  {
    id: 'update-4',
    date: 'December 2024',
    tag: 'Admit Card & Centre',
    type: 'MP Board',
    title: 'MP Board Regular & Private Students Roll Number / Admit Card Release',
    desc: 'Principals can download school-wise admit cards from MPOnline portal. Correction window open for subject code and spelling errors.',
    pdfSize: '620 KB',
    isUrgent: false,
    linkText: 'Verification Guidelines'
  }
];

// Student & Parent Testimonials
export const testimonials = [
  {
    name: 'Aarav Sharma',
    city: 'Indore, Madhya Pradesh',
    badge: 'MP Board Topper 96.4%',
    quote: 'SmartStudy’s MP Board blueprint notes and previous 5-year question papers were pure gold. The Hindi & English medium terms helped me score 98 in Physics!'
  },
  {
    name: 'Sneha Patel',
    city: 'Bhopal, Madhya Pradesh',
    badge: 'CBSE Class 12 Science 97.2%',
    quote: 'The step-by-step NCERT solutions and 50% competency-based questions gave me immense confidence during my pre-boards and final board exams.'
  },
  {
    name: 'Rohan Verma',
    city: 'Gwalior, Madhya Pradesh',
    badge: 'Class 11 CBSE Aspirant',
    quote: 'Class 11 physics was overwhelming at first, but SmartStudy formula sheets and rapid chapter mock tests made concepts crystal clear.'
  }
];

// Detailed Chapter Notes / Content for Reader Modal
export const sampleChapterContent = {
  title: 'Electric Charges and Fields (Class 12 Physics)',
  board: 'CBSE & MP Board Aligned',
  readingTime: '15 min read',
  pdfName: 'SmartStudy_Class12_Physics_Ch01_Complete_Notes.pdf',
  sections: [
    {
      heading: '1. Electric Charge and its Fundamental Properties',
      content: `Electric charge is the intrinsic property of matter that gives rise to electric and magnetic forces and interactions.
      
Key Properties:
• Additivity of Charges: Total charge of an isolated system is algebraic sum: Q = q₁ + q₂ + ... + qₙ.
• Conservation of Charge: Charges can neither be created nor destroyed; they can only be transferred.
• Quantization of Charge: Charge on any body is an integral multiple of basic quantum of charge e (1.602 × 10⁻¹⁹ C).
  Formula: Q = ± ne  (where n = 1, 2, 3...)`
    },
    {
      heading: '2. Coulomb\'s Law in Vector Form',
      content: `Coulomb's Law states that the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of charges and inversely proportional to the square of distance between them.
      
Mathematical Expression:
F = (1 / 4πε₀) · (|q₁ · q₂| / r²)
where ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻² (Permittivity of Free Space).
In vector notation:
F₁₂ = - F₂₁ = (1 / 4πε₀) · (q₁ q₂ / r²) · r̂₁₂
This proves Newton’s Third Law is obeyed in electrostatics.`
    },
    {
      heading: '3. Gauss\'s Law & High-Yield Board Derivations',
      content: `Gauss’s Law states that the total electric flux through any closed surface (Gaussian surface) is equal to 1/ε₀ times the net charge enclosed within that surface.
      
Formula:
∮ E · dA = Q_enclosed / ε₀

Important Board Derivations:
1. Electric Field due to Infinitely Long Straight Wire:
   E = λ / (2πε₀ r)   (where λ = linear charge density)
2. Electric Field due to Uniformly Charged Infinite Plane Sheet:
   E = σ / (2ε₀)      (independent of distance r!)
3. Electric Field due to Thin Spherical Shell of Radius R:
   • Outside (r > R): E = (1/4πε₀) · (q / r²)
   • On the surface (r = R): E = (1/4πε₀) · (q / R²)
   • Inside (r < R): E = 0 (No charge enclosed inside conductor)`
    },
    {
      heading: '4. Frequently Asked Board Exam Questions (3 & 5 Markers)',
      content: `Q1 (3 Marks - CBSE 2023, MPBSE 2022):
Define electric dipole moment. Derive an expression for the torque experienced by an electric dipole placed in a uniform electric field.
Answer Hint:
Torque τ = p × E = p E sin θ. Torque is maximum when dipole is perpendicular to field (θ = 90°), and zero in stable equilibrium (θ = 0°).

Q2 (5 Marks - CBSE 2024 Sample Paper):
State Gauss’s law. Using Gauss’s theorem, deduce Coulomb’s inverse square law.
Answer Hint:
Consider a spherical Gaussian surface around point charge q. By symmetry, E is radial and uniform on the sphere:
∮ E · dA = E (4π r²) = q / ε₀  => E = q / (4πε₀ r²).
Placing test charge q₀ at distance r gives force F = q₀ E = (q q₀) / (4πε₀ r²). Hence proved.`
    }
  ]
};
