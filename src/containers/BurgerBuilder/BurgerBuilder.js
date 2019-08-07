import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchaseable: false
    };
  }

  updatePurchaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchaseable: sum > 0
    });
  };

  IncreaseIngredients = type => {
    const convertType = type.toLowerCase();
    const { salad, bacon, cheese, meat } = this.state.ingredients;
    const priceAddition = INGREDIENT_PRICE[convertType];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      {
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
        },
        totalPrice: newPrice
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  DecreaseIngredients = type => {
    const convertType = type.toLowerCase();
    const { salad, bacon, cheese, meat } = this.state.ingredients;
    const priceAddition = INGREDIENT_PRICE[convertType];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState(
      {
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
        },
        totalPrice: newPrice
      },
      () => {
        this.updatePurchaseState();
      }
    );
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
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          IncreaseIngredients={this.IncreaseIngredients}
          DecreaseIngredients={this.DecreaseIngredients}
          disableInfo={disableInfo}
          totalPrice={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </>
    );
  }
}

export default BurgerBuilder;
