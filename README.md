# iceCream_App

## Unit-Test✅iceCream_App

## home page
🍨This project is a web application that allows users to select and order various types of ice cream. The application is built using modern web development technologies, specifically React and Bootstrap for styling and user interface enhancements.

## 💥Features:

🗂Ice Cream Selection: Users can choose from a variety of ice cream flavors.
🗂Cart Management: Users can add and remove items from the cart.
🗂Order Confirmation: Users can confirm their orders.
🗂Terms Acceptance: Users cannot place an order without accepting the terms and conditions.
🗂Total Price Display: Users can see the total price of the added items.
Sauce Selection: Users can choose from different types of sauces. 

## ⚒️Technologies Used:

📌React: Used for building the user interface.
📌Axios: Used for API calls and data fetching.
📌Testing Library: Used for user interface testing.
📌Jest: Used for unit and other types of testing.


<img src="./public/iceCream_App.gif"/>

# Kütüphaneler
- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap

# Test Geliştirme SÜreçleri

## TDD (Test Driven Development)
- Red to Green test
- Önce özelliğin / bileşenin testi yazılır; ardından bileşen / özellik kodlanır.
- Artısı, testler bir yük gibi gelmez. Geliştirme sürecinin bir parçası olur.

## BDD (Behaviour Driven Developmnet)

- Önce özellik / bileşen geliştirilir sonra testleri yapılır.

## Kullanıcı Etkileşimi Tetikleme

- Unit test yazarken kullanıcı etkileşimi tetiklemenin 2 yolu bulunuyor.

### FireEvent

- rtl içerisinde gelen olay tetikleme methodu
gerçek kullanıcıdan uzak tepkiler verdiği için artık yerini userEvente bırakmıştır.
- Tetiklenen olaylar gerçek bir insanın tepkimesinden çok daha hızlı bir şekilde gerçekleşir.

### UserEvent

- Bu yolu kullanmak için userEvent paketi indirilmelidir.
- fireEvent'in modern çözümü
- Tetiklediğimiz olaylar gerçek kullanıcının yapacağı gibi belirli bir gecikmenin ardından gerçekleşir.
- Gecikme olduğu için async await kullanılır.


