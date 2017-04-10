var VacancySign = React.createClass({
  render: function() {
    if (this.props.message) {
      return (<div> Vacancy </div> );
    } else {
      return (<div> No vacancy </div>);
    }
   
  }
});



ReactDOM.render(
  <VacancySign message={false} />,
  document.body
);