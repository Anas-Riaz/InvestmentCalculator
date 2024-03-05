import Row from "./Row";
import {calculateInvestmentResults} from '../util/investment.js';
export default function Result({input}){

    const result = calculateInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
                
            <tbody>
                {result.map((row)=> (
                    <Row className='center' key={row.year} {...row}/>
                ))}
            </tbody>
        </table>
    );
}