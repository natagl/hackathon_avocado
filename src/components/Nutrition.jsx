import React, { Component } from 'react';
import avocadoData from '../avocado.json'

class Nutrition extends Component {
    showAvocado = () => {
        console.log(avocadoData);
        return avocadoData.map(eachAvocado => {
            return (
                <div key={eachAvocado.Food_Name}>
                    <img src="./download.jpg" />
                    <ul>Name :{eachAvocado.Food_Name}</ul>
                    <ul>Serving size: {eachAvocado.serving_size}</ul>
                    <ul>Calories: {eachAvocado.calories}</ul>
                    <ul>Total fat: {eachAvocado.total_fat}</ul>
                    <ul>Saturated Fat: {eachAvocado.saturated_fat}</ul>
                    <ul>Cholesterol: {eachAvocado.cholesterol}</ul>
                    <ul>Folate" {eachAvocado.folate}</ul>
                    <ul>Folic Acid{eachAvocado.folic_acid}</ul>
                    <ul>Fat: {eachAvocado.fat}</ul>
                    <ul>Monounsaturated Fatty Acids{eachAvocado.monounsaturated_fatty_acids}</ul>


                </div>

            );
        });
    }
    render() {
        return (
            <div>
                {this.showAvocado()}
            </div>
        );
    }
}

export default Nutrition;