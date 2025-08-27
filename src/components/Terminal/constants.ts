export const FILE_SYSTEM = {
  '/about': {},
  '/about/skills': {},
  '/about/skills/tech': {
    content: `Ethereum         Foundry, Wagmi, OpenZeppelin, The Graph, Snarkjs
Back End         NodeJS, ExpressJS, Routing-controllers, Passport, Deno, Flask, Elasticsearch, IPFS
Front End        React, Redux, NextJS, Semantic-UI, Tailwindcss
Database         PostgreSQL, MongoDB, Redis, BullMQ
DevOps           Docker, Kubernetes, Github Actions, Pulumi
Version Control  Git, GitHub
OS               Linux (Debian/Ubuntu), MacOS
Data Science     Pandas, Scipy, Numpy, Scikit-learn, Jupyter, Seaborn, Bokeh, Knime
`,
  },
  '/about/skills/languages': {
    content: `Typescript, Javascript, Solidity, Python, SQL, HTML, CSS, Bash, (Rust, Golang)
French, English, German, (Spanish)

(Beginner)`,
    canModify: false,
  },
  '/about/education': {
    content: `YEAR   DEGREE                  SCHOOL
2012   Master of Engineering   Ecole Centrale de Nantes
2009   Bachelor of Science     Lycée Kerichen de Brest
`,
    canModify: false,
  },
  '/about/experiences': {
    content: `YEAR            ROLE                                   COMPANY
2025-present    Software Engineer                      Exodus
2025            Web3 Engineer                          Ethereum Foundation
2021            Blockchain Engineer                    Exodus
2020            Full Stack Web Developer               Airbus
2019            Data Analyst                           Airbus
2017-2018       Project and Performance Manager        Airbus
2013-2016       Technical Data Engineer                Airbus
2012            Intern, Standardization Office         Renault
2011            Intern, Supply & Trading Dpt           Total`,
    canModify: false,
  },
  '/portfolio': {},
  '/portfolio/repos': {
    content: 'Personal GitHub repositories.',
    canModify: false,
  },
  '/portfolio/zk-book-exercises': {
    content: 'ZK-Book exercises solutions.',
    canModify: false,
  },
  '/portfolio/cryptography-101': {
    content: 'Modern Cryptography Primitives 101.',
    canModify: false,
  },
}
