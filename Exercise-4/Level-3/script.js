const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: {
      income: [8000, 10000, 20000, 40000],
      description: ['bonus','stocks','overtime','salary']
    },
    expenses: {
      expense: [10000, 5000, 10000, 3000],
      description: ['tax','groceries','fees','tution']
    },
    totalIncome: function() {
      return `Total income 78000`;
    },
    totalExpense: function() {
      return `Total expenses 28000`;
    },
    acountInfo: function() {
      return `Personal account`;
    },
    addIncome: function() {
      return `10000 income pending`;
    },
    addExpense: function() {
      return `10000 expense pending`;
    },
    accountBalance: function() {
      return `50000 account balance`;
    }
  };
  console.log(personAccount);
  
  const users2 = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
    ];
  
  // console.log(users2);
  let alreadyExists = false;
  let inputUsername, inputPass;
  function signUp() {
    alert('Welcome to signUp');
    inputUsername = prompt('Enter your username: ');
    inputPass = prompt('Enter your 6-digit password: ');
    while(inputPass.length != 6)
    {
      alert('Please enter a 6-digit password');
      inputPass = prompt('Enter your 6-digit password: ');
    }
    for(let i=0;i<users2.length;i++) {
      if(users2[i].username == inputUsername.trim() && 
        users2[i].password == inputPass)
      {
        alreadyExists= true;
        break;
      }
    }
    if(alreadyExists)
      alert('Account already exists');
    else
    {
      let newUser = {
          username: `${inputUsername}`,
          password: `${inputPass}`,
        };
        users2.push(newUser);
      console.log("Modified users are:");
      console.log(users2);
    }
  }
  // signUp();
  
  let alreadyPresent = false;
  let inpUsername, inpPass, attempt=2;
  function signIn() {
    alert('Welcome to signIn');
    inpUsername = prompt('Enter your username: ');
    inpPass = prompt('Enter your 6-digit password: ');
    while(inpPass.length != 6)
    {
      alert('Please enter a 6-digit password');
      inpPass = prompt('Enter your 6-digit password: ');
    }
    attempt--;
    for(let i=0;i<users2.length;i++) {
      if(users2[i].username == inpUsername.trim() && users2[i].password == inpPass)
      {
        alreadyExists= true;
        break;
      }
    }
    if(alreadyExists)
    {
      alert(`Welcome back! ${inpUsername}`);
      console.log(users2);
    }
    else
    {
      while(attempt != 0)
      {
        alert('Account does not exist. Check your credentials and try again!');
        attempt--;
        signIn();
      }
      if(attempt == 0)
        signUp();
    }
  }
  signIn();
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];
  
  let sum=0;
  function rateProduct() {
    for(let i=0;i<products.length;i++)
    { 
      for(let j=0;j<products[i].ratings.length;j++)
      {
        sum+=products[i].ratings[j].rate;
      }
      console.log('Rating of '+products[i].description+' is '+sum);
      sum=0;
    }
  }
  rateProduct();
  
  let total=0,avg=0;
  function averageRating(){
    for(let i=0;i<products.length;i++)
    {
      for(let j=0;j<products[i].ratings.length;j++)
      {
        sum+=products[i].ratings[j].rate;
      }
      if(products[i].ratings.length == 0)
        avg = 0;
      else
        avg = sum/products[i].ratings.length;
      console.log('Average Rating of '+products[i].description+' is '+avg);
      sum=0;
    }
  }
  averageRating();
  
  function likeProduct(){
    for(let i=0;i<products.length;i++)
    {
      if(products[i].likes.length != 0)
      { 
        // make its length zero i.e. remove all likes
        products[i].likes.splice(0,products[i].likes.length);
      }
      else
      {
        for(let j=0;j<products[i].ratings.length;j++)
        {
          products[i].likes.push(products[i].ratings[j].userId);
        }
      }
    }
    console.log('Modified likes of products are:');
    for(let k=0;k<products.length;k++)
    {
      if(products[k].likes.length != 0)
        console.log('Likes of '+products[k].description+' are '+products[k].likes);
      else
        console.log('Likes of '+products[k].description+' are none');
    }
  }
  likeProduct();