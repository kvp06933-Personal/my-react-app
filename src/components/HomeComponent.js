import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
        <Card>
        
        </Card>
    );
}
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard 
                    item={props.partner} 
                    isLoading={props.campsitesLoading}
                    errMess={props.campsitesErrMess}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;