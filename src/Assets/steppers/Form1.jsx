const Form1 = (props) => {

    return props.status === 5 ? (
        <div>
            <div className="card4">
                <h1>Motseki Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                {/* <div className="planSummaryBox">
                    <h4 className="step4PlanName">{props.selectedPlan} ({props.selectedMode})</h4>
                    <h4 id="planValue">{handlePlan(props.selectedPlan, props.selectedMode)}</h4><br></br>
                    <button id="changePlanBtn" onClick={props.handlePlanChange}>Change</button>
                    <hr />
                    {addOns.map((addOn, index) => (
                        <div key={index}>
                            <h5>{addOn}</h5>
                            <h5 className="step4AddOnValue">{addOn === "Online service" ? addOnPrices[0] : addOn === "Larger storage" ? addOnPrices[1] : addOnPrices[2]}</h5>
                        </div>
                    ))} 
                </div> */}
                <h5 className="step4Total">Total (per {props.selectedMode === "Monthly" ? 'month' : 'year'})</h5>
                {/* <h4 className="step4TotalValue">{calculateTotal()}</h4><br></br>  */}
                <button className="goBackBtnDesktop" onClick={props.onGoBackClick} style={{marginTop: "5%"}}>Go Back</button>
                <button className="nextBtnDesktop" onClick={props.onNextClick} style={{marginTop: "5%"}}>Confirm</button>
            </div>

            <div className="next">
                <button className="goBackBtn" onClick={props.onGoBackClick}>Go Back</button>
                <button className="nextBtn" onClick={props.onNextClick}>Confirm</button>
            </div>
        </div>
    ) : null;
}

export default Form1;

