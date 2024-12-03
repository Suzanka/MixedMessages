const messagesEng = [
    "Emerging issue? Or just an advanced way to say 'your day is ruined'?",
    "Requester: 'This is urgent!' Me: 'Define urgent.'",
    "Nothing bonds a team like a 4-hour debate on who owns the EI.",
    "Amazon Chime: come for the meeting, stay for the awkward silences.",
    "SIM opened: *Sighs deeply* 'Here we go again.'",
    "Requester: 'I added more context to the SIM.' Me: 'Cool, now it’s more confusing.'",
    "Emerging issues are like Pokémon: gotta catch them all.",
    "Chime breakout rooms: where productivity goes to nap.",
    "Requester: 'Any updates?' Me: 'Sure, we’re still investigating the EI... kind of.'",
    "The EI was marked as resolved, but deep down, we know it’s not.",
    "Leadership Principles: reminding you that ownership means you're stuck with this forever.",
    "Working backwards, but the deadline still looms forwards.",
    "Requester: 'Let’s align on this.' Me: 'Let’s not.'",
    "Chime meetings without agendas: an endless corporate abyss.",
    "Emerging issues are proof that chaos is our natural state.",
    "SIM assigned to you: congratulations, you just became the new owner.",
    "Requester: 'Can we prioritize this?' Me: 'Yeah, it’s already number 87 on my list.'",
    "Daily stand-ups: where nothing stands up but excuses.",
    "Never underestimate a requester’s ability to overcomplicate a simple EI.",
    "Emerging issues: because calm days are overrated.",
    "Chime status: ‘Green.’ Mind status: ‘Red Alert.’",
    "When someone says, ‘It’s just a quick EI,’ you know it’s a trap.",
    "Requester comments: ‘Looks good, but…’ And there goes your weekend.",
    "Emerging issues are the corporate equivalent of unexpected plot twists.",
    "SIM tasks: where progress bars go to die.",
    "Amazon’s version of fun? Debugging a tool you didn’t build.",
    "Requester: ‘I’ll send an update shortly.’ Me: *Two weeks later...*",
    "Chime sound = internal scream.",
    "Emerging issues: because we needed more reasons to skip lunch.",
    "‘This EI shouldn’t take long.’ Famous last words.",
    "The best way to handle an EI? Hope someone else picks it up first.",
    "Requester: ‘Can we follow up on the SIM?’ Me: ‘Can you follow up on your patience?’",
    "Emerging issues: building careers and crushing souls since day one.",
    "‘Please prioritize this SIM.’ Translation: ‘Drop everything else immediately.’",
    "Nothing like an EI to ruin a perfectly good Friday afternoon.",
    "Requester: ‘Any blockers?’ Me: ‘Yeah, my will to live.’",
    "The only thing worse than opening an EI is closing it just for it to reopen.",
    "Requester typing in Chime… *sweats profusely.*",
    "Emerging issues come and go, but the pain is forever.",
    "SIM assigned to you? Welcome to your villain origin story.",
    "The only thing faster than an EI is a Chime message from the requester.",
    "Requester: ‘Can you clarify?’ Me: *Clarifies* Requester: ‘I don’t get it.’",
    "When in doubt, blame the tools. Always blame the tools.",
    "‘Let’s park this for now.’ Translation: ‘Good luck, future you.’",
    "The EI is resolved, but the emotional damage remains.",
    "Requester: ‘This should only take 10 minutes.’ Me: *laughs in workload.*",
    "The SIM is now in ‘Blocked’ status. Translation: nobody knows what’s happening."
  ];
  
const messagesPL = [
    "Emerging issue? Czyli dzień zmarnowany.",
    "Requester: 'To pilne!' Ja: 'Co dokładnie to znaczy?'",
    "Nic tak nie łączy zespołu jak debata, kto ma naprawić EI.",
    "Chime: miejsce, gdzie milczenie jest niezręczne, a nie złotem.",
    "SIM przypisany: *westchnięcie* 'No to mam co robić.'",
    "Requester: 'Dodałem kontekst do SIM-a.' Ja: 'Super, teraz nic nie rozumiem.'",
    "Emerging issues są jak Pokemony: zbieraj je wszystkie.",
    "Pokoje breakout na Chime: tam, gdzie efektywność idzie na przerwę.",
    "Requester: 'Są jakieś postępy?' Ja: 'Tak, wciąż nad tym myślimy.'",
    "EI zamknięty? Cud. Ale wróci jak bumerang.",
    "Leadership Principles: przypominają, że 'ownership' to życie w stresie.",
    "Praca wstecz, ale deadline wciąż się zbliża.",
    "Requester: 'Zsynchronizujmy się.' Ja: 'Nie, dzięki.'",
    "Spotkania bez agendy to jak wycieczka bez mapy.",
    "Emerging issues: dowód, że chaos to nasz naturalny stan.",
    "SIM przypisany Tobie? Witamy w nowym życiu.",
    "Requester: 'Czy możemy to priorytetyzować?' Ja: 'Jasne, numer 87 na liście.'",
    "Stand-upy: gdzie jedyne, co stoi, to wymówki.",
    "Requester: 'Potrzebujemy więcej szczegółów.' Ja: 'Potrzebuję mniej maili.'",
    "Emerging issues: bo spokój to mit.",
    "Chime status: 'Zielony.' Mój status: 'Czerwona panika.'",
    "Ktoś mówi: 'To tylko szybkie EI.' Wiesz, że to pułapka.",
    "Komentarz requestera: 'Wygląda dobrze, ale...' I po weekendzie.",
    "Emerging issues: korporacyjne plot twisty.",
    "SIM-y: gdzie pasek postępu to fikcja.",
    "Amazonowe 'fun': debugowanie narzędzi, których nie zbudowałeś.",
    "Requester: 'Zaraz wyślę update.' Ja: *Dwa tygodnie później...*",
    "Dźwięk Chime = wewnętrzny krzyk.",
    "Emerging issues: bo trzeba jeszcze coś dołożyć w piątek.",
    "‘To nie zajmie dużo czasu.’ Klasyczne ostatnie słowa.",
    "Jak radzić sobie z EI? Licz, że ktoś inny to ogarnie.",
    "Requester: 'Co z SIM-em?' Ja: 'Co z twoją cierpliwością?'",
    "Emerging issues: budują kariery i niszczą duszę od pierwszego dnia.",
    "‘Priorytet SIM-a.’ Tłumaczenie: 'Zrzuć wszystko inne.'",
    "Nic tak nie psuje piątku jak EI o 16:00.",
    "Requester: 'Są jakieś blokery?' Ja: 'Tak, moja motywacja.'",
    "Najgorsze w zamknięciu EI? Gdy znów się otwiera.",
    "Requester pisze na Chime… *zimny pot.*",
    "Emerging issues przychodzą i odchodzą, ale trauma zostaje.",
    "SIM przypisany do Ciebie? Witamy w Twojej historii złoczyńcy.",
    "Emerging issues są szybsze niż requester piszący na Chime.",
    "Requester: 'Możesz to wyjaśnić?' Ja: *Wyjaśnia.* Requester: 'Nie rozumiem.'",
    "Kiedy wątpisz, zwal na narzędzia.",
    "‘Zaparkujmy to na razie.’ Tłumaczenie: 'Powodzenia w przyszłości.'",
    "EI rozwiązane, ale emocjonalne szkody zostają.",
    "Requester: 'To tylko 10 minut pracy.' Ja: *śmieje się w stresie.*",
    "SIM w statusie 'Zablokowane.' Tłumaczenie: 'Nikt nie wie, co robić.'"
  ];



const eng = () => {
    const randomEn = Math.floor(Math.random() * messagesEng.length)
    return messagesEng[randomEn]
}
const pl = () => {
    const randomPL = Math.floor(Math.random() * messagesPL.length)
    return messagesPL[randomPL]
} 


const runMessages = () => {
    const isPLSelected = document.querySelector("#radioPL").checked;
    const isENSelected = document.querySelector("#radioEN").checked;
    if (isPLSelected) {
        return pl();
    } else if (isENSelected) {
        return eng();
    } else {
        return `Select a language | Wybierz język`;
    }
}

    

const finalOutput = () => {
    const outputElement = document.querySelector(".js-output")
    outputElement.textContent = runMessages();

}

