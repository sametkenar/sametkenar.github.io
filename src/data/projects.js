export const projects = [
  {
    id: 1,
    title: "Analysis of 2022 - 2023 Football Players for Position Detection and Classification",
    date: "April 2025 - June 2025",
    description:
      "Designed a Python pipeline that ingested 2689 footballers with 124 metrics, engineered 37 PCA-based features across 10 performance categories (e.g., shot efficiency, defensive reliabiliity) and benchmarked five classifiers – LogReg, RF, ANN, XGBoost, SVM. After RFECV, SVM delivered 81% test accuracy / F1 and K 0.73, enabling position-specific insights for scouts and analysts.",
    sourceCode:
      "https://github.com/sametkenar/Analysis_of_2022_2023_Football_Players_for_Position_Detection_and_Classification",
  },
  {
    id: 2,
    title: "Matching Qualified Interns with Employers",
    date: "October 2024 - March 2025",
    description:
      "Authored draft article on ‘Matching Qualified Interns with Employers’, using National Internship Program data to model internship-offer odds. Tested 4 ML models (logistic regression, random forest, XGBoost, Lasso); random forest scored highest and surfaced key competencies via Mean Decrease Accuracy/Gini metrics.",
  },
  {
    id: 3,
    title: "Music Analysis on METU Students",
    date: "November 2022 - January 2023",
    description:
      "Led a university-wide survey (409 students, 37 departments) and built an R analytics pipeline (ggplot, ANOVA, χ², regression – 7 methods) to profile music-listening behaviour, performance and psychology, revealing a pronounced psychological impact on students.",
  },
];
