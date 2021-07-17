import classes from './MealSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our selection of super meals
         and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        Our meals are cooked with high-quality ingredients, just-in-time and
        by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
