import { default as strava, Strava } from 'strava-v3';
import Link from './link';

export default function StravaModal() {
    strava.config({
    "access_token": process.env.STRAVA_ACCESS_TOKEN,
    "client_id": process.env.STRAVA_CLIENT_ID,
    "client_secret": process.env.STRAVA_CLIENT_SECRET,
    "redirect_uri": process.env.STRAVA_REDIRECT_URI
    });

    const getActivities = async () => {
        try {
            const activities = await strava.athlete.listActivities();
            console.log(activities);
            return activities;
        } catch (error) {
            console.error(error);
        }
    };

    // let activities = getActivities();

    return (
        <section id="strava" className="mb-12">
            <div className="flex items-end gap-2 mt-2 mb-2">
                <h2 className="font-semibold text-2xl tracking-tighter">what's amory doing?</h2>
                {/* <Link href="https://strava.com/athletes/89712555" displayName="strava" /> */}
                {/* <a href="https://strava.com/athletes/89712555" className="strava-badge- strava-badge-follow" target="_blank"><img src="//badges.strava.com/echelon-sprite-24.png" alt="Strava" /></a> */}
            </div>
            <div className="mb-8 border border-white rounded-lg p-4 min-w-sm max-w-md">
                {/* {activities ? activities.map((activity) => (
                    <div key={activity.id} className="mb-4">
                        <h3 className="font-semibold text-lg">{activity.name}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{activity.type} - {Math.round(activity.distance / 1000)} km</p>
                    </div>
                )) : <p className="text-sm text-neutral-600 dark:text-neutral-400">Loading...</p>
                } */}
            </div>
        </section>
        
    )
}