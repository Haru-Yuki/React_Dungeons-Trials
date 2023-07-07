import {getDutyByNameAPI} from "@/app/src/api/duties-api/duties-api";
import DutyBackLink from "@/app/[duty]/[dutyName]/duty-back-link/duty-back-link";
import styles from "../../styles/app/[duty]/[dutyName]/duty.module.scss";
import Image from "next/image";

async function getDutyByName(duty: string, name: string) {
    return getDutyByNameAPI(duty, name);
}

export default async function DutyName({ params }: { params: {duty: string, dutyName: string } }) {
    const duty = await (await getDutyByName(params.duty, params.dutyName.replaceAll('%20', ' '))).data;

    return (
        <section className={styles.dutyWrapper}>
            <DutyBackLink />
            <div className={styles.dutyImageWrapper}>
                <Image
                    src={duty.imageLink}
                    alt={duty.name}
                    fill
                    sizes="30vw"
                >
                </Image>
            </div>
            <p className={styles.dutyParagraph}>Duty name: {duty.name}</p>
            <p className={styles.dutyParagraph}>Type: {params.duty}</p>
            <p className={styles.dutyParagraph}>Patch: {duty.patchName}</p>
            <p className={styles.dutyParagraph}>Level: {duty.level}</p>
            <p className={styles.dutyParagraph}>iLevel: {duty.iLevel}</p>
            <p className={styles.dutyDescription}>{duty.description}</p>
        </section>
    )
}