
const ProfileList = ({profiles, email}) => {

// const ProfileList = (props) => {
    // const profiles = props.profiles;
    // console.log(props,profiles);


    return (
        <div className="profile-list">
            <h2>{email}</h2>
            {profiles.map((profile) => (
            <div className="profile-preview" key={profile.id}>
                <h2>{profile.email}</h2>
                <h2>{profile.firstname}</h2>
                </div>
            ))}
        </div>
    );
}

export default ProfileList;