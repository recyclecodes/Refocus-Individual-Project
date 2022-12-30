import { newsList } from "./main.js";

test('The news list contains an article "What books should an aspiring journalist read?"', () => {
  expect(newsList).toContain('What books should an aspiring journalist read?');
});

test('Sort ascending order', () => {
  expect(newsList.sort()).toStrictEqual(
    [
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
      "Buried underpants and tea bags help scientists evaluate soil",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Media glare can enrich tennis pros yet imperil mental health",
      "What books should an aspiring journalist read?",
      "What films should an aspiring journalist watch?",
    ]);
});

test('Sort desscending order', () => {
  expect(newsList.sort() && newsList.reverse()).toStrictEqual(
    [
      "What films should an aspiring journalist watch?",
      "What books should an aspiring journalist read?",
      "Media glare can enrich tennis pros yet imperil mental health",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Buried underpants and tea bags help scientists evaluate soil",
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
    ]);
});