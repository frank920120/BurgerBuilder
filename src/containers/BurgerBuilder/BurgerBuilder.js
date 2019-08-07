import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };
  }

  IncreaseIngredients = type => {
    const convertType = type.toLowerCase();
    const { salad, bacon, cheese, meat } = this.state.ingredients;
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [convertType]:
          convertType === "salad"
            ? salad + 1
            : convertType === "bacon"
            ? bacon + 1
            : convertType === "cheese"
            ? cheese + 1
            : convertType === "meat"
            ? meat + 1
            : null
      }
    });
  };

  DecreaseIngredients = type => {
    const convertType = type.toLowerCase();
    const { salad, bacon, cheese, meat } = this.state.ingredients;
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [convertType]:
          convertType === "salad"
            ? salad === 0
              ? 0
              : salad - 1
            : convertType === "bacon"
            ? bacon === 0
              ? 0
              : bacon - 1
            : convertType === "cheese"
            ? cheese === 0
              ? 0
              : cheese - 1
            : convertType === "meat"
            ? meat === 0
              ? 0
              : meat - 1
            : null
      }
    });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          IncreaseIngredients={this.IncreaseIngredients}
          DecreaseIngredients={this.DecreaseIngredients}
          disableInfo={disableInfo}
        />
      </>
    );
  }
}

export default BurgerBuilder;
