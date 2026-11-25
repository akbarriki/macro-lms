import type { topics } from "@/data/topics";

// A topic's short name, such as "gdp". The list comes from data/topics.ts.
type TopicSlug = (typeof topics)[number]["slug"];

export type QuizQuestion = {
  question: string;
  options: [string, string, string, string];
  // The position of the correct option. Counting starts at 0, so 0 is the first option.
  answer: 0 | 1 | 2 | 3;
  // Shown after the student answers.
  explanation: string;
};

export const quizzes: Record<TopicSlug, QuizQuestion[]> = {
  gdp: [
    {
      question: "What does GDP measure?",
      options: [
        "The total wealth of a country's people",
        "All goods sold in a country, including used goods",
        "The market value of final goods and services produced in a country in a period",
        "The total income of the government",
      ],
      answer: 2,
      explanation: "GDP counts the market value of final goods and services produced within a country in a given period.",
    },
    {
      question: "C = 600, I = 150, G = 200, exports = 100, and imports = 120. What is GDP?",
      options: ["930", "950", "1,050", "1,170"],
      answer: 0,
      explanation: "Net exports = 100 − 120 = −20. GDP = 600 + 150 + 200 − 20 = 930.",
    },
    {
      question: "A firm buys a new machine to use in its factory. Which part of GDP is this?",
      options: ["Consumption", "Investment", "Government purchases", "Net exports"],
      answer: 1,
      explanation: "In GDP, investment includes spending by firms on equipment and buildings.",
    },
    {
      question: "Which of these is NOT counted in GDP?",
      options: [
        "A haircut at a salon",
        "A newly built house",
        "A new car sold to a family",
        "A parent caring for their own child at home",
      ],
      answer: 3,
      explanation: "Unpaid work at home is not bought or sold in a market, so GDP leaves it out.",
    },
    {
      question: "Why might GDP rise without everyone becoming better off?",
      options: [
        "GDP counts only exports",
        "GDP does not show how income is shared",
        "GDP leaves out all services",
        "GDP includes only government spending",
      ],
      answer: 1,
      explanation: "GDP is a total. It does not show who receives the income.",
    },
  ],
  unemployment: [
    {
      question: "Who is counted as unemployed?",
      options: [
        "A retired teacher who is not looking for work",
        "A part-time worker who wants more hours",
        "A person without a job who is available and recently looked for work",
        "Every adult without a job",
      ],
      answer: 2,
      explanation: "An unemployed person has no job, is available to work, and has recently looked for work.",
    },
    {
      question: "A country has 190 employed and 10 unemployed people. What is the unemployment rate?",
      options: ["5%", "5.3%", "10%", "95%"],
      answer: 0,
      explanation: "Labor force = 190 + 10 = 200. Unemployment rate = (10 ÷ 200) × 100 = 5%.",
    },
    {
      question: "A new graduate is searching for a first job. Which type of unemployment is this?",
      options: ["Cyclical", "Structural", "Natural", "Frictional"],
      answer: 3,
      explanation: "Frictional unemployment happens because it takes time for workers and jobs to find each other.",
    },
    {
      question: "The actual unemployment rate is 8% and the natural rate is 5%. What is cyclical unemployment?",
      options: ["13%", "3%", "5%", "−3%"],
      answer: 1,
      explanation: "Cyclical unemployment is the gap between the actual and natural rates: 8% − 5% = 3%.",
    },
    {
      question: "Some unemployed people stop looking for work. What happens to the unemployment rate?",
      options: ["It rises", "It stays the same", "It falls", "It becomes zero"],
      answer: 2,
      explanation: "They are no longer counted as unemployed or in the labor force, so the rate falls.",
    },
  ],
  inflation: [
    {
      question: "Inflation slows from 8% to 5%. What is this called?",
      options: ["Deflation", "Disinflation", "Stagflation", "Depreciation"],
      answer: 1,
      explanation: "Prices are still rising, but more slowly. That is disinflation.",
    },
    {
      question: "The CPI rises from 120 to 126. What is the inflation rate?",
      options: ["6%", "4.8%", "26%", "5%"],
      answer: 3,
      explanation: "((126 − 120) ÷ 120) × 100 = 5%.",
    },
    {
      question: "A jump in oil prices raises production costs, and prices rise. What kind of inflation is this?",
      options: ["Cost-push", "Demand-pull", "Expected", "Nominal"],
      answer: 0,
      explanation: "Cost-push inflation starts with higher production costs.",
    },
    {
      question: "A loan charges 8% interest and inflation is 5%. What is the approximate real interest rate?",
      options: ["13%", "8%", "3%", "1.6%"],
      answer: 2,
      explanation: "Real interest rate ≈ 8% − 5% = 3%.",
    },
    {
      question: "Inflation is higher than expected. Who gains on a fixed-rate loan?",
      options: ["The lender", "The borrower", "Both gain equally", "Neither is affected"],
      answer: 1,
      explanation: "The borrower repays in money that buys less than expected.",
    },
  ],
  "economic-growth": [
    {
      question: "An economy grows 7% per year. About how long does it take to double?",
      options: ["7 years", "14 years", "10 years", "70 years"],
      answer: 2,
      explanation: "Rule of 70: 70 ÷ 7 = about 10 years.",
    },
    {
      question: "Real GDP grows 3% and population grows 2%. About how fast does real GDP per person grow?",
      options: ["1%", "5%", "6%", "1.5%"],
      answer: 0,
      explanation: "Growth per person is roughly 3% − 2% = 1%.",
    },
    {
      question: "In the long run, what is the main source of higher living standards?",
      options: ["A larger population", "Higher prices", "More natural resources", "Rising productivity"],
      answer: 3,
      explanation: "Producing more per hour of work is what allows living standards to keep rising.",
    },
    {
      question: "Which of these is an example of human capital?",
      options: ["A factory", "A worker's training", "An oil field", "A delivery truck"],
      answer: 1,
      explanation: "Human capital is workers' education, skills, and health.",
    },
    {
      question: "What does diminishing returns to capital mean?",
      options: [
        "Each extra machine adds less output than the one before, other inputs unchanged",
        "Machines always become more expensive",
        "Total output falls whenever capital rises",
        "New technology is not useful",
      ],
      answer: 0,
      explanation: "Output still rises, but each extra unit of capital adds less than the one before.",
    },
  ],
  "business-cycles": [
    {
      question: "Which phase comes right after a peak?",
      options: ["Expansion", "Trough", "Recovery", "Recession"],
      answer: 3,
      explanation: "After the peak, output and employment fall. That is a recession.",
    },
    {
      question: "Potential output is 800 and actual output is 824. What is the output gap?",
      options: ["−3%", "+3%", "+24%", "+2.9%"],
      answer: 1,
      explanation: "((824 − 800) ÷ 800) × 100 = +3%.",
    },
    {
      question: "Which of these is countercyclical?",
      options: ["The unemployment rate", "Consumption", "Investment", "Employment"],
      answer: 0,
      explanation: "Unemployment usually rises when output falls, so it moves in the opposite direction.",
    },
    {
      question: "Why does investment usually fall more than consumption in a recession?",
      options: [
        "Firms are not allowed to invest in recessions",
        "Investment is larger than consumption",
        "Firms can delay buying machines, but households still need necessities",
        "Households always spend more in recessions",
      ],
      answer: 2,
      explanation: "Investment can be postponed more easily than food and housing.",
    },
    {
      question: "New building permits usually fall before the economy slows. What kind of indicator are they?",
      options: ["Lagging", "Coincident", "Countercyclical", "Leading"],
      answer: 3,
      explanation: "A leading indicator tends to change before the economy does.",
    },
  ],
  "aggregate-demand-and-supply": [
    {
      question: "Exports rise sharply. What happens in the short run?",
      options: [
        "AD shifts left; output and the price level fall",
        "AD shifts right; output and the price level rise",
        "SRAS shifts right; output rises and the price level falls",
        "LRAS shifts left; output falls",
      ],
      answer: 1,
      explanation: "Higher net exports raise spending at every price level, so AD shifts right.",
    },
    {
      question: "Oil prices jump. What happens in the short run?",
      options: [
        "Output and the price level both rise",
        "Output and the price level both fall",
        "Output falls and the price level rises",
        "Output rises and the price level falls",
      ],
      answer: 2,
      explanation: "SRAS shifts left, causing stagflation: lower output and higher prices.",
    },
    {
      question: "Why is the long-run aggregate supply curve vertical?",
      options: [
        "Long-run output depends on resources and technology, not the price level",
        "Prices never change in the long run",
        "The government sets output",
        "Demand is always constant",
      ],
      answer: 0,
      explanation: "In the long run, output is set by labor, capital, natural resources, and technology.",
    },
    {
      question: "Which explains why lower prices make people feel richer and consume more?",
      options: ["Interest rate effect", "Exchange rate effect", "Crowding out", "Wealth effect"],
      answer: 3,
      explanation: "With lower prices, the money people hold buys more. That is the wealth effect.",
    },
    {
      question: "AD falls and policy does not respond. How does the economy return to potential output in the model?",
      options: [
        "AD shifts further left",
        "LRAS shifts left",
        "SRAS shifts right as expected prices and wages fall",
        "SRAS shifts left as wages rise",
      ],
      answer: 2,
      explanation: "Lower expected prices and wages reduce costs, so SRAS shifts right.",
    },
  ],
  "fiscal-policy": [
    {
      question: "Which of these is expansionary fiscal policy?",
      options: [
        "The government cuts taxes",
        "The government raises taxes",
        "The central bank cuts interest rates",
        "The government cuts spending",
      ],
      answer: 0,
      explanation: "A tax cut raises aggregate demand. Interest rates are set by monetary policy.",
    },
    {
      question: "If MPC is 0.8, what is the simple spending multiplier?",
      options: ["0.8", "1.25", "4", "5"],
      answer: 3,
      explanation: "1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5.",
    },
    {
      question: "Why does a tax cut raise output by less than an equal rise in government purchases?",
      options: [
        "Tax cuts are illegal in recessions",
        "People save part of the tax cut",
        "Tax cuts lower consumption",
        "Government purchases are always saved",
      ],
      answer: 1,
      explanation: "Government purchases add to spending directly, while part of a tax cut is saved.",
    },
    {
      question: "What is crowding out?",
      options: [
        "Too many people looking for jobs",
        "Imports replacing exports",
        "Government borrowing raises interest rates and reduces private investment",
        "Taxes falling in a recession",
      ],
      answer: 2,
      explanation: "More government borrowing can raise interest rates, which discourages private investment.",
    },
    {
      question: "A government collects 100 and spends 120 this year. Which is correct?",
      options: [
        "It has a surplus of 20",
        "It has a deficit of 20, and its debt usually rises",
        "Its debt is exactly 20",
        "Its budget is balanced",
      ],
      answer: 1,
      explanation: "100 − 120 = −20. The deficit is usually paid for by borrowing, which adds to debt.",
    },
  ],
  "monetary-policy": [
    {
      question: "Who usually carries out monetary policy?",
      options: ["The tax office", "Commercial banks", "The central bank", "The stock exchange"],
      answer: 2,
      explanation: "The central bank, such as Bank Indonesia, carries out monetary policy.",
    },
    {
      question: "The reserve ratio is 20%. What is the simple money multiplier?",
      options: ["5", "20", "2", "0.2"],
      answer: 0,
      explanation: "1 ÷ 0.20 = 5.",
    },
    {
      question: "The central bank buys securities from banks. What happens?",
      options: [
        "Bank reserves fall; policy is contractionary",
        "Taxes rise",
        "Government debt disappears",
        "Bank reserves rise; policy is expansionary",
      ],
      answer: 3,
      explanation: "Buying securities adds reserves to banks, which usually lowers interest rates.",
    },
    {
      question: "How can a higher interest rate reduce net exports?",
      options: [
        "It makes the currency weaker",
        "It attracts foreign funds and strengthens the currency",
        "It raises tariffs",
        "It lowers the price of exports",
      ],
      answer: 1,
      explanation: "A stronger currency makes exports more expensive and imports cheaper.",
    },
    {
      question: "Why is it hard for monetary policy to fight cost-push inflation?",
      options: [
        "Raising rates also lowers output",
        "Interest rates do not affect spending",
        "Central banks cannot raise rates",
        "Cost-push inflation never ends",
      ],
      answer: 0,
      explanation: "Higher rates slow inflation, but they also reduce output that has already fallen.",
    },
  ],
  "international-trade": [
    {
      question: "What does comparative advantage mean?",
      options: [
        "Producing more than anyone else",
        "Having the most workers",
        "Exporting more than you import",
        "Producing at a lower opportunity cost",
      ],
      answer: 3,
      explanation: "Comparative advantage means giving up less of other goods to produce something.",
    },
    {
      question: "A worker makes 4 shirts or 4 bags of rice in X, and 6 shirts or 2 bags in Y. Who has the comparative advantage in rice?",
      options: ["Country X", "Country Y", "Both countries", "Neither country"],
      answer: 0,
      explanation: "One bag of rice costs 1 shirt in X but 3 shirts in Y, so X has the lower opportunity cost.",
    },
    {
      question: "What is a tariff?",
      options: [
        "A limit on the quantity of imports",
        "A payment to exporters",
        "A tax on imports",
        "A fixed exchange rate",
      ],
      answer: 2,
      explanation: "A tariff is a tax on imports. A limit on quantity is a quota.",
    },
    {
      question: "The rate moves from 16,000 to 15,500 rupiah per dollar. What happened to the rupiah?",
      options: ["It depreciated", "It appreciated", "It did not change", "It became fixed"],
      answer: 1,
      explanation: "One dollar now costs fewer rupiah, so the rupiah is stronger.",
    },
    {
      question: "A country's currency depreciates. What usually happens over time?",
      options: [
        "Exports become more expensive for foreigners",
        "Imports become cheaper at home",
        "Net exports tend to rise",
        "Trade stops",
      ],
      answer: 2,
      explanation: "Exports become cheaper for foreigners and imports more expensive, so net exports tend to rise.",
    },
  ],
};
