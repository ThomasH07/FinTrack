export type RootDrawerParamList = {
    Dashboard: undefined;
    Access: undefined;
    FinTrack: undefined;
    Budget: undefined;
    Transactions: undefined;
    Settings: undefined;
    ' ': undefined;
    
    
    // not pages 

    BudgetCircle:undefined;
  };


export type Expense = {
    // Automotive, Bills & utilities, Cash out, Education, Entertainment, Fees & adjustments, Food & drink, Gas, Gifts & donations, Groceries, Health & wellness, Home, Miscellaneous, Personal, Professional services, Shopping, Travel
    tag: string;
    // amount
    amount: number;
  };