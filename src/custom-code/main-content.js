import React from 'react';

class MainContent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        //declarar variáveis antes
        return(
            <table class="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">CUR-1</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">Escolha moeda</th>
                        <td>0.56</td>
                        <td>4.57</td>
                        <td>1.23</td>
                        <td>5.32</td>
                        <td>7.78</td>
                    </tr>

                </tbody>

            </table>
        )

    }
}

export default MainContent;