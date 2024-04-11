export const qnaList = [
  {
    q: '1. 사랑하는 사람에게 좋아하는 치킨부위를 양보 할 수 있다?',
    a: [
      {
        answer: 'a. 양보가 어딨어? 절대 없어',
        type: ['cheeky', 'emptyStomach', 'dietPill'],
      },
      {
        answer: 'b. 치킨이 뭐라고... 양보가능',
        type: [
          'romanticist',
          'something',
          'sociability',
          'muscle',
          'waterWeight',
          'lazy',
          'mutation',
        ],
      },
      {
        answer: 'c. 치킨은 나눌 수 없다. 1인 1닭이다.',
        type: ['perfectPig', 'chopsticks'],
      },
    ],
  },
  {
    q: '2. 점심밥 먹으면서 저녁메뉴 뭐 먹을지 생각한다? ',
    a: [
      {
        answer: 'a. 뭘 먹을지까지 이미 다 정했음.',
        type: ['muscle', 'designedly', 'dietPill', 'cheeky'],
      },
      {
        answer: 'b. 저녁까지 생각하기엔 내 앞의 밥이 더 중요하다.',
        type: ['waterWeight', 'emptyStomach', 'lazy', 'sociability'],
      },
      {
        answer: 'c. 전 날부터 정해놓음.',
        type: ['perfectPig', 'chopsticks', 'romanticist', 'something'],
      },
    ],
  },
  {
    q: '3. 친구와 만나 저녁을 먹으려는데, 가기로 했던 맛집이 아닌 다른 곳을 가자고한다.',
    a: [
      {
        answer: 'a. 이거 먹으려고 점심부터 설렜는데... 절대 바꿀 수 없다.',
        type: ['muscle', 'dietPill', 'chopsticks', 'designedly', 'perfectPig'],
      },
      {
        answer: 'b. 아는 맛이라 맛있는건데... 하고 친구의 의견을 따른다. ',
        type: ['sociability', 'romanticist', 'lazy'],
      },
      {
        answer: 'c. 가위바위보로 정하자고 한다.',
        type: ['something', 'mutation', 'waterWeight', 'cheeky'],
      },
    ],
  },
  {
    q: '4. 어쨌든 맛있게 배가 빵빵해지도록 먹고나왔는데 친구가 디저트를 먹으러 가자고 한다.',
    a: [
      {
        answer: 'a. 항상 디저트를 먹을 공간은 있는법. 당장 간다. ',
        type: ['perfectPig', 'sociability', 'cheeky'],
      },
      {
        answer: 'b. 배가 너무 불러서 디저트는 소화 시키고 먹자고 한다.',
        type: ['chopsticks', 'designedly', 'muscle', 'romanticist'],
      },
      {
        answer: 'c. 우선 아메리카노로 목을 축여본다.',
        type: ['waterWeight', 'lazy', 'dietPill', 'something', 'mutation'],
      },
    ],
  },
  {
    q: '5. 회사에 출근했더니 좋아하는 간식이 있다. 내가 몰래 혼자 먹으면 아무도 모르는 상황!',
    a: [
      {
        answer: 'a. 아무도 모르게 먹는다.',
        type: ['something', 'dietPill', 'designedly', 'muscle', 'mutation'],
      },
      {
        answer: 'b. 이 간식 내가먹는다!!! 하고 선언하고 먹는다.',
        type: ['romanticist', 'sociability', 'chopsticks', 'perfectPig'],
      },
      {
        answer: 'c. 어차피 먹으라고 둔건데... 대놓고 먹는다.',
        type: ['waterWeight', 'lazy', 'cheeky'],
      },
    ],
  },

  {
    q: '6. 우울한 날이라 밥을 사먹으려한다. 그런데 길을가다 너무 예쁜 꽃이 있는 꽃집을 보았다.',
    a: [
      {
        answer:
          'a. 꽃이 너무 아름다워서 지나칠 수 없다. 꽃을 사서 기분전환한다.',
        type: ['romanticist', 'something', 'mutation', 'cheeky'],
      },
      {
        answer: 'b. 스트레스는 먹는걸로 푼다. 그냥 지나친다.',
        type: ['perfectPig', 'designedly', 'lazy', 'chopsticks'],
      },
      {
        answer: 'c. 꽃집 앞에서 한참을 고민하다. 저녁밥을 사먹는다.',
        type: [
          'dietPill',
          'Failed to load resource: the server responded with a status of 404 ()',
          'muscle',
          'waterWeight',
        ],
      },
    ],
  },
  {
    q: '7. 노릇하게 구워진 만두를 시식코너에서 권하는데 왠지 먹으면 사야할 것만 같다.',
    a: [
      {
        answer: 'a. 구매는 선택이다. 당당하게 먹고 간다.',
        type: ['perfectPig', 'cheeky', 'waterWeight'],
      },
      {
        answer:
          'b. 먹었는데 맛은 있지만 살 정도는 아닌데 아주머니의 세일즈력에 얼떨결에 계산한다.',
        type: ['chopsticks', 'lazy', 'sociability', 'romanticist', 'dietPill'],
      },
      {
        answer: 'c. 시식코너에는 눈조차 주지 않고 살 것만 산다.',
        type: ['mutation', 'something', 'dietPill', 'muscle'],
      },
    ],
  },
  {
    q: '8. 중국집에서 공통음식으로 탕수육을 시켰다.',
    a: [
      {
        answer: 'a. 개인 음식 먹기 전에 공통 음식 먼저 다 먹는다.',
        type: ['waterWeight', 'perfectPig', 'something', 'chopsticks'],
      },
      {
        answer: 'b. 개인 음식 먹고 공통 음식도 간간이 먹는다.',
        type: [
          'rabbit',
          'lazy',
          'cheeky',
          'sociability',
          'romanticist',
          'dietPill',
          'designedly',
        ],
      },
      {
        answer: 'c. 개인 음식 위주로 먹고 공통음식은 거의 안먹는다.',
        type: ['muscle', 'mutation'],
      },
    ],
  },
  {
    q: '9. 케이크를 맛있게 먹고있는데 동생이 뒤에서 갑자기 손을 내밀어 책상위의 핸드폰을 가져가는데... ',
    a: [
      {
        answer:
          'a. 내 음식을 뺏어 먹으려는 줄 알고 깜짝 놀라 입에 쑤셔 넣었다.',
        type: ['cheeky', 'perfectPig', 'chopsticks', 'waterWeight'],
      },
      {
        answer:
          'b. 이미 손에 신경쓰고 있어서 놀라진 않았지만 접시를 사수하고 있다.',
        type: ['something', 'lazy', 'muscle', 'mutation', 'designedly'],
      },
      {
        answer:
          'c. 사랑스러운 마이-씨스타✨ 맛있는 케이크 먹어보라고 한 입 준다.',
        type: ['romanticist', 'sociability', 'mutation'],
      },
    ],
  },
  {
    q: '10. 연인이 말도 없이 아껴둔 간식을 먹어버렸다.',
    a: [
      {
        answer:
          'a. 아니, 내일 먹으려고 아껴둔건데..지가 사 먹지... 솔직히 짜증이 난다.',
        type: [
          'perfectPig',
          'cheeky',
          'waterWeight',
          'chopsticks',
          'designedly',
        ],
      },
      {
        answer: 'b. 아 그래..? 좀 별로지만 사랑하니까 참을만하다',
        type: ['dietPill', 'tiger', 'lazy', 'muscle'],
      },
      {
        answer: 'c. 별생각 안 든다. 다시 사 먹지 뭐',
        type: ['mutation', 'sociability', 'something', 'romanticist'],
      },
    ],
  },
  {
    q: '11. 도시락을 싸서 다같이 반찬을 나눠 먹기로 했다. ',
    a: [
      {
        answer: 'a. 다른 사람이 싸 온 고기를 먼저 먹는다.',
        type: ['designedly', 'waterWeight', 'perfectPig', 'cheeky'],
      },
      {
        answer: 'b. 고기가 먼저 보이지만, 야채도 좋아해서 골고루 먹는다.',
        type: [
          'chopsticks',
          'dietPill',
          'muscle',
          'lazy',
          'sociability',
          'romanticist',
        ],
      },
      {
        answer: 'c. 다 같이 먹는 거 싫어서 도시락 혼자 먹는다.',
        type: ['mutation', 'something'],
      },
    ],
  },
  {
    q: '12.연인 때문에 화가 난 상황! 그런데 내가 좋아하는 치킨을 주며 달래준다.',
    a: [
      {
        answer: 'a. "개 빡치네. 누가 돼지 새낀줄 아나." 하고 더 화낸다.',
        type: ['something', 'muscle', 'mutation', 'designedly'],
      },
      {
        answer: 'b. 치킨을 보니 나도 모르게 맘이 스르르 풀린다.',
        type: ['sociability', 'perfectPig', 'chopsticks', 'waterWeight'],
      },
      {
        answer: 'c. 나를 잘 아는 모습에 화는 나지만 맛있으니까 먹는다.',
        type: ['romanticist', 'lazy', 'dietPill', 'cheeky'],
      },
    ],
  },
];

export const infoList = [
  {
    name: '물만 마셔도 살찌는 돼지',
    desc: '물만 마셔도 살이 찐다는 당신! 습담증이 아니라면 그 것은 전부 거.짓.말! 자신도 모르게 좋지 못한 식습관을 가지고 있는지 생각해보세요. 식이조절이 필요할지도?',
    type: ['waterWeight'],
  },
  {
    name: '계획적으로 살찐 돼지',
    desc: '살마저 계획적으로 찌우는 당신! 계획 없이는 군것질을 하지 않기 때문에 당신은 온전하게 고의적으로 살찌운 돼지입니다. 계획대로 된 모습이 자랑스러울지도?',
    type: ['designedly'],
  },
  {
    name: '젓가락질 잘 해야지 밥 잘먹나요 돼지',
    desc: '젓가락질을 못하면 수저로 먹으면 된다! 젓가락질을 잘 못해도 걱정이 없습니다. 우리에게는 수저가 있으니까요! 어디 가서 지지 않는 먹심을 발휘하는 당신! 깃발을 든 잔다르크처럼 돌진합니다.',
    type: ['chopsticks'],
  },
  {
    name: '다이어트 약 먹는 돼지',
    desc: '기름지게 먹어도 당당한 당신! 오늘은 적게 먹어야지 하고 많이 먹어버립니다. 어느새 나도 모르게 다이어트 약에 손을 대고야 마는데...! 그 효능에 빠지게 되어 많이 먹고 약 먹는 게 습관이 되어버립니다. 간을 조심하세요. ',
    type: ['dietPill'],
  },
  {
    name: '돼지 계의 돌연변이 돼지',
    desc: '돼지 사이에 끼어있는 돌연변이인 당신! 돼지 사이에서 살고 싶습니다. 하지만 맘처럼 되지 않아서 따라다니기라도 하는군요. 조금 더 돼지처럼 행동하기 위해 돼지를 본받아 보세요. 아직 부족하군요.',
    type: ['mutation'],
  },
  {
    name: '완벽한 돼지',
    desc: 'OMG! 당신은 완벽합니다. 돼지 중의 돼지! 완벽한 돼지입니다. 다른 말이 필요 없을 정도로 확실합니다. 누가 와도 당신의 돼 지력을 무시할 수 없습니다. 왕 중 왕 돼지인 당신을 말라깽이들이 본받고 싶어 합니다.',
    type: ['perfectPig'],
  },
  {
    name: '근육 있는 돼지',
    desc: '근육 돼지...라는 말 들어본 적 있으신가요? 당신은 돼지지만 근육을 소중히 생각합니다. 근육을 위해 식이를 조절할 수 있는 당신. 이대로 파이팅해서 이두와 삼두, 광배의 삼박자를 갖춰보는 게 어떨까요?',
    type: ['muscle'],
  },
  {
    name: '게으른 돼지',
    desc: '돼지도 당신보다 부지런 할 수도 있습니다. 무언가에 심력을 소모하고 싶지 않습니다. 조금 더 적극적으로 돼지력을 키워보는 것이 어떨까요 ?',
    type: ['lazy'],
  },
  {
    name: '잔망스러운 돼지',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘 하지만, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!',
    type: ['cheeky'],
  },
  {
    name: '돼지인 척 하는 무언가',
    desc: '돼지가 되고 싶어 돼지를 꿈꾸는 당신. 돼지가 되고 싶지만 쉽지 않습니다. ',
    type: ['sociability'],
  },
  {
    name: '친화력 좋은 돼지 ',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 다른 사람을 위해서라면 음식도 양보 할 수 있는 마음을 가졌습니다. 돼지가 좋아하는 돼지. 당신은 돼지들의 유명인사!  ',
    type: ['something'],
  },
  {
    name: '로맨티시스트 돼지',
    desc: '마음속에 장미가 피어 있습니다. 고기보다 아름다움을 먼저 볼 수 있는 사랑 가득한 마음을 가졌습니다. 당신은 돼지들의 최고의 로맨티시스트입니다.',
    type: ['romanticist'],
  },
];
