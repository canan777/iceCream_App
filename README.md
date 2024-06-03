# iceCream_App

<img src="./public/iceCream_App.gif"/>

# Kütüphanelerin Sürüm
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


