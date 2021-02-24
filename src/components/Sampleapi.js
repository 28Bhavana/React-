import React from 'react';

const Sampleapi = (props) => {

    const MenuList = ({ menuitems }) => {

        if (menuitems) {
            return menuitems.map((data) => {
                return (
                    <div key={data.id} to={`/menu/${data.id}`} >
                        <div>
                            <div>
                                <span class="max">$. {data.price}</span>
                                <h4 class="card-title">{data.name}</h4>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="container">
            <div className="row">
                {MenuList(props)}
            </div>
        </div>
    )
}

export default Sampleapi;