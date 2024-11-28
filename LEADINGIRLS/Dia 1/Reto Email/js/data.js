const emails = [
    {
        id: 1,
        sender: 'María González',
        subject: 'Reunión mañana',
        preview: 'Hola equipo, Solo un recordatorio sobre nuestra reunión de mañana a las 10 AM...',
        content: `
            <p>Hola equipo,</p>
            <p>Solo un recordatorio sobre nuestra reunión de mañana a las 10 AM. Por favor, vengan preparados con sus actualizaciones de proyectos.</p>
            <p>¡Espero verlos a todos!</p>
            <p>Saludos,<br>María</p>
        `,
        time: '3:45 PM',
        read: false
    },
    {
        id: 2,
        sender: 'Juan Pérez',
        subject: 'Actualización del proyecto',
        preview: 'Buenos días, aquí está la actualización semanal del proyecto...',
        content: `
            <p>Buenos días,</p>
            <p>Aquí está la actualización semanal del proyecto. Hemos completado todas las tareas planificadas.</p>
            <p>Saludos,<br>Juan</p>
        `,
        time: '10:30 AM',
        read: false
    },
    {
        id: 3,
        sender: 'Laura Martínez',
        subject: '¡Pago pendiente urgente! Tu cuenta está en riesgo',
        preview: 'Estimado cliente, hemos detectado un pago pendiente en tu cuenta...',
        content: `
            <p>Estimado usuario,</p>
            <p>Te informamos que hemos detectado un pago pendiente relacionado con tu cuenta. Si no se procesa el pago dentro de las próximas 24 horas, tu acceso podría ser suspendido y se aplicarán cargos adicionales.</p>
            <br>
            <p style="text-decoration:underline">Detalles de la transacción:</p>
            <br>
            <ul>
                <li>Importe: 250€</li>
                <li>Fecha de vencimiento: 09 de noviembre de 2024</li>
                <li>URL de confirmación: http://www.pagopendiente.xyz/confirmar</li>
            </ul>
            <br>
            <p>Si ya has realizado el pago, por favor ignora este mensaje. De lo contrario, accede al siguiente enlace para completar la transacción de inmediato y evitar bloqueos.</p>
            <p>¡Actúa ahora!</p>
        `,
        time: 'Mar 15',
        read: false
    },
{
    id: 4,
    sender: 'Ana Ruiz',
    subject: 'Documentos para revisión',
    preview: 'Hola a todos, Adjunto los documentos que necesitan ser revisados para...',
    content: `
        <p>Hola a todos,</p>
        <p>Adjunto los documentos que necesitan ser revisados para la presentación del próximo mes. Por favor, necesito sus comentarios antes del viernes.</p>
        <p>Los puntos principales a revisar son:</p>
        <ul>
            <li>Análisis de mercado</li>
            <li>Proyecciones financieras</li>
            <li>Plan de implementación</li>
        </ul>
        <p>Gracias de antemano,<br>Ana</p>
    `,
    time: '2:15 PM',
    read: false
},
{
    id: 5,
    sender: 'Servicio Técnico Apple',
    subject: '¡ALERTA! Tu cuenta de iCloud ha sido comprometida',
    preview: 'Hemos detectado actividad sospechosa en tu cuenta de iCloud...',
    content: `
        <p>Estimado cliente de Apple,</p>
        <p>Hemos detectado múltiples intentos de inicio de sesión sospechosos en tu cuenta de iCloud desde diferentes ubicaciones. Por seguridad, tu cuenta será suspendida en las próximas 12 horas.</p>
        <p>Para verificar tu identidad y mantener tu cuenta activa, necesitamos que:</p>
        <ul>
            <li>Confirmes tus datos personales</li>
            <li>Actualices tu información de seguridad</li>
            <li>Verifiques tu método de pago</li>
        </ul>
        <p>Haz clic aquí para verificar tu cuenta: http://apple-secure-verify.xyz</p>
        <p>Si no realizas esta verificación, perderás el acceso a todos tus servicios de iCloud.</p>
        <p>Departamento de Seguridad de Apple</p>
    `,
    time: '9:20 AM',
    read: false
}
];
