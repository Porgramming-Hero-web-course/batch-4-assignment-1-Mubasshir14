{
    // 

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, update: Partial<Profile>): Profile {
        return { ...profile, ...update };
    }

    // const myProfile : Profile ={
    //     name: 'Mubasshir',
    //     age: 24,
    //     email: 'abc@gmail.com'
    // };

    // const callForUpdate = updateProfile(myProfile, {
    //     age: 23,
    //     email: 'mubasshir@gmail.com'
    // });

    // console.log(callForUpdate);

    // 
}