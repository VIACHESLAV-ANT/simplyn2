(() => {
    // Pobieranie przycisku
    var formButton = document.querySelector('.review__buttan');
    
    // Pobieranie przycisków formularza
    var buyMenuButton = document.querySelector('.form-our-menu');
    var submitButton = document.querySelector('.form-our__submit');
    
    // Pobieranie elementu tła (backdrop)
    var backdrop = document.querySelector('.backdrop-our');
    
    // Funkcja obsługująca kliknięcie przycisku "button__form"
    function handleFormButtonClick() {
      // Usuwanie klasy "is-hidden" z tła (backdrop)
      backdrop.classList.remove('is-hidden');
    }
    
    // Funkcja obsługująca kliknięcie przycisków formularza
    function handleFormButtonsClick() {
      // Dodawanie klasy "is-hidden" do tła (backdrop)
      backdrop.classList.add('is-hidden');
    }
    
    // Dodawanie nasłuchiwacza kliknięcia do przycisku "button__form"
    formButton.addEventListener('click', handleFormButtonClick);
    
    // Dodawanie nasłuchiwaczy kliknięcia do przycisków formularza
    buyMenuButton.addEventListener('click', handleFormButtonsClick);
    submitButton.addEventListener('click', handleFormButtonsClick);
    })();