import React from 'react';
// import styles from "./Table.module.scss";

function Table({tableHeaders, children}) {
    return (
        <div >

            <table  >
                <thead>
                <tr>

                    {tableHeaders.map(header => {
                        return (
                            <th style={{margin:"500px" , padding:"100px"}} key={header.name}>{header.name}</th>
                        )
                    })}

                </tr>

                </thead>
                <tbody>
                {children}
                </tbody>
            </table>


        </div>
    );
}

export {Table};