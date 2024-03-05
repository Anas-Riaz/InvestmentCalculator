import { formatter } from "../util/investment";

export default function Row({
    year, 
    interest, 
    valueEndOfYear, 
    annualInvestment, 
    }){
    const initialInvestment = valueEndOfYear - interest - annualInvestment;
    const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
    const investedCapital = valueEndOfYear - totalInterest;

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
}