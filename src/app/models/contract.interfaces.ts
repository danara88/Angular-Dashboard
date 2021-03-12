export interface Contract {
  currency:       string;
  down_payment:   number;
  file:           string;
  guarantee_fund: number;
  withVat:        number;
  cumulatives:    Cumulatives;
  end_date:       Date;
  responsible:    string;
  status:         string;
  vat:            number;
  name:           string;
  contractor:     string;
  code:           string;
  updated_by:     string;
  start_date:     Date;
  charge_off:     number;
  updatedAt:      Date;
  withoutVat:     number;
  category:       string;
  sk:             string;
  id:             string;
  pk:             string;
  total_amount:   number;
  type:           string;
}

export interface Cumulatives {
  additives:   number;
  deductive:   number;
  extra:       number;
  estimations: number;
}
