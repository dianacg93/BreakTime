import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFacts } from "../actions/factsAction";
import Facts from "../components/facts/Facts";

const FactsPage = ({ dispatch, loading, facts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  const renderFacts = () => {
    if (loading) return <p> Loading Facts...</p>;
    if (hasErrors) return <p>An error has occurred</p>;
    return facts;
  };

  const factsClick = () => {
    dispatch(fetchFacts());
  };

  return (
    <div>
      <Facts facts={renderFacts()} factsClick={() => factsClick()} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  type: state.facts.type,
  loading: state.facts.loading,
  facts: state.facts.facts,
  hasErrors: state.facts.hasErrors,
});

export default connect(mapStateToProps)(FactsPage);
