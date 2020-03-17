import React from 'react'
import './ConnectionTable.css'

export const ConnectionTable: React.FC = () => {
    return (
        <table className="connection-table">
            <tr>
                <th className="first">
                    Campaing <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    Time <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    Views <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    Visitors <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    CTR <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    CPC <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    CPV <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    CPM <i className="fas fa-chevron-down"></i>
                </th>
                <th>
                    Status <i className="fas fa-chevron-down"></i>
                </th>
            </tr>
            <tr>
                <td className="first">Lorem ipsum dolor sit amet tetur</td>
                <td>6 days</td>
                <td>358 000</td>
                <td>58 200</td>
                <td>25%</td>
                <td>$3.02</td>
                <td>$2.51</td>
                <td>$28.35</td>
                <td><i className="fas fa-circle active"></i> Active</td>
            </tr>
            <tr>
                <td className="first">Sed do eiusmod tempor</td>
                <td>7 days</td>
                <td>1 200</td>
                <td>800</td>
                <td>10%</td>
                <td>$8.45</td>
                <td>$6.13</td>
                <td>$45.22</td>
                <td><i className="fas fa-circle disable"></i> Disable</td>
            </tr>
            <tr>
                <td className="first">Consectetur adipisicing elit sed</td>
                <td>3 days</td>
                <td>69 000</td>
                <td>7 300</td>
                <td>19%</td>
                <td>$6.22</td>
                <td>$3.90</td>
                <td>$37.80</td>
                <td><i className="fas fa-circle active"></i> Active</td>
            </tr>
        </table>
    )
}